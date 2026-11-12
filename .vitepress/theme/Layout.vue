<script lang="ts">
import { createSidebar } from '../sidebar.mjs'
import navigation from '../navigation.json'
import reference from '../program-reference.json'
import { createReferenceLinks, referenceEntries } from '../reference-navigation.mjs'

const sidebar = createSidebar(navigation)
const referenceLink = createReferenceLinks()
const referenceArticles = referenceEntries(reference, referenceLink)
</script>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watchPostEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { dataSymbol } from 'vitepress/dist/client/app/data.js'
import { referenceSelection, articleIndexSelection, sectionSelection, menuSelection } from './reference-state'
import { articlePath, contextualNav } from '../section-navigation.mjs'
import { data as articles } from '../../hilfe/artikel.data.mjs'
import { articleIndexLink } from '../article-index.mjs'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import ReferenceSidebar from './ReferenceSidebar.vue'
import ArticlePrintIcon from './ArticlePrintIcon.vue'
import SiteFooter from './SiteFooter.vue'
import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue'
import { referencePageId } from '../reference-navigation.mjs'
const referenceAreas = navigation.sidebar['/programmreferenz/'].slice(1)
const data = useData()
const { page, theme, frontmatter } = data
// Static HTML cannot know the query parameter. Switch after hydration on
// direct article visits so the server and client initially render alike.
const mounted = ref(false)
onMounted(() => { mounted.value = true })
const indexMode = computed(() => page.value.relativePath === 'hilfe/alle-artikel.md' || (mounted.value && articleIndexSelection.value))
const sections = Object.keys(navigation.sidebar)
const currentPath = computed(() => '/' + page.value.relativePath)
const standardSection = computed(() => sidebar.sectionFor(currentPath.value))
const selectedSection = computed(() => {
  const section = sectionSelection.value.startsWith('tools/') ? '/tools/' : '/' + sectionSelection.value + '/'
  return mounted.value && sections.includes(section) ? section : ''
})
const referenceMode = computed(() => !indexMode.value && (
  page.value.relativePath.startsWith('programmreferenz/') ||
  (mounted.value && referenceSelection.value !== null) ||
  (selectedSection.value || standardSection.value) === '/programmreferenz/'
))
const activeSection = computed(() => indexMode.value ? '/hilfe/' : referenceMode.value ? '/programmreferenz/'
  : selectedSection.value || standardSection.value)
const readingMenu = computed(() => sidebar.menuFor(activeSection.value))
const readingGroups = computed(() => readingMenu.value?.forArticle(currentPath.value, mounted.value ? menuSelection.value : '') || [])
const readingEntries = computed(() => readingMenu.value?.entries || [])
function adjacentInSection(offset: number) {
  const position = readingEntries.value.findIndex(entry => entry.key === articlePath(currentPath.value))
  const entry = position < 0 ? undefined : readingEntries.value[position + offset]
  return entry ? { text: entry.text, link: entry.link } : false
}
const indexBranch = (item: any): boolean => articlePath(item.link || '/') === '/hilfe/alle-artikel' || !!item.items?.some(indexBranch)
const onIndexOverview = computed(() => articlePath(currentPath.value) === '/hilfe/alle-artikel' && !articleIndexSelection.value)
const expandIndex = (item: any): any => articlePath(item.link || '/') === '/hilfe/alle-artikel'
 ? { ...item, collapsed: false, sidebarActive: onIndexOverview.value, items: articles.map(article => ({ text: article.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'), link: articleIndexLink(article.url), sidebarActive: !onIndexOverview.value && articlePath(article.url) === articlePath(currentPath.value) })) }
 : { ...item, sidebarActive: false, ...(item.items ? { items: item.items.map(expandIndex), ...(indexBranch(item) ? { collapsed: false } : {}) } : {}) }
const helpSidebar = computed(() => sidebar.menuFor('/hilfe/').tree.map(expandIndex))
const visibleSidebar = computed(() => indexMode.value ? helpSidebar.value : readingGroups.value)

// The menu renders the active class. Mirror it for assistive technology.
watchPostEffect(() => {
  if (!mounted.value) return
  void visibleSidebar.value
  const menu = document.getElementById('VPSidebarNav')
  if (!menu) return
  for (const link of menu.querySelectorAll('.VPSidebarItem > .item > a[aria-current]')) {
    link.removeAttribute('aria-current')
  }
  if (!referenceMode.value) {
    menu.querySelector('.VPSidebarItem.is-active > .item > a')?.setAttribute('aria-current', 'page')
  }
})
// Supply the context menu to the default theme, including its active states,
// mobile navigation and previous/next links. Original page data stays intact.
const indexHome = computed(() => indexMode.value && frontmatter.value.layout === 'home')
const indexPosition = computed(() => articles.findIndex(article => article.url === '/' + page.value.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')))
function adjacentArticle(offset: number) {
  const article = indexPosition.value < 0 ? undefined : articles[indexPosition.value + offset]
  return article ? { text: article.title, link: articleIndexLink(article.url) } : false
}
const referencePosition = computed(() => {
  const route = '/' + page.value.relativePath.replace(/\.md$/, '')
  if (route === '/programmreferenz/index') return 0
  const id = referencePageId(reference, referenceSelection.value, route)
  return id ? referenceArticles.findIndex(article => article.id === id) : -1
})
function adjacentReference(offset: number) {
  const article = referencePosition.value < 0 ? undefined : referenceArticles[referencePosition.value + offset]
  return article ? { text: article.text, link: article.link } : false
}
provide(dataSymbol, {
  ...data,
  theme: computed(() => ({ ...theme.value,
    nav: contextualNav(navigation.nav, activeSection.value, sections),
    sidebar: visibleSidebar.value
  })),
  frontmatter: computed(() => indexMode.value ? {
    ...frontmatter.value,
    ...(indexHome.value ? { layout: 'doc', aside: false } : {}),
    prev: adjacentArticle(-1), next: adjacentArticle(1)
  } : referenceMode.value ? {
    ...frontmatter.value, prev: adjacentReference(-1), next: adjacentReference(1)
  } : readingMenu.value ? {
    ...frontmatter.value, prev: adjacentInSection(-1), next: adjacentInSection(1)
  } : frontmatter.value)
})
</script>

<template>
  <div :class="{ 'program-reference-view': referenceMode }">
    <DefaultTheme.Layout>
      <template #doc-before><VPHome v-if="indexHome" /><ArticlePrintIcon v-if="!page.relativePath.startsWith('druck/')" :key="page.relativePath" /></template>
      <template #sidebar-nav-before>
        <ReferenceSidebar v-if="referenceMode" :link-for="referenceLink" />
        <div v-if="referenceMode" class="reference-areas">
          <VPSidebarGroup :items="referenceAreas" />
        </div>
      </template>
      <template #layout-bottom><SiteFooter /></template>
    </DefaultTheme.Layout>
  </div>
</template>
