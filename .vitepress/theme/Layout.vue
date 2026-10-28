<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { dataSymbol } from 'vitepress/dist/client/app/data.js'
import { referenceSelection, articleIndexSelection, sectionSelection } from './reference-state'
import { getSidebar } from 'vitepress/dist/client/theme-default/support/sidebar.js'
import { articlePath, contextualSidebar, contextualNav, sectionEntries } from '../section-navigation.mjs'
import { data as articles } from '../../hilfe/artikel.data.mjs'
import { articleIndexLink } from '../article-index.mjs'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import ReferenceSidebar from './ReferenceSidebar.vue'
import ArticlePrintIcon from './ArticlePrintIcon.vue'
import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue'
import navigation from '../navigation.json'
import reference from '../program-reference.json'
import { referenceActiveId, referenceEntries } from '../reference-navigation.mjs'
const referenceAreas = navigation.sidebar['/programmreferenz/'].slice(1)
const referenceArticles = referenceEntries(reference)
const data = useData()
const { page, theme, frontmatter } = data
// Static HTML cannot know the query parameter. Switch after hydration on
// direct article visits so the server and client initially render alike.
const mounted = ref(false)
onMounted(() => { mounted.value = true })
const indexMode = computed(() => page.value.relativePath === 'hilfe/alle-artikel.md' || (mounted.value && articleIndexSelection.value))
const referenceMode = computed(() => !indexMode.value && (page.value.relativePath.startsWith('programmreferenz/') || page.value.relativePath === 'druck/programmreferenz.md' || (mounted.value && !!referenceSelection.value)))
const sections = Object.keys(navigation.sidebar)
const selectedSection = computed(() => {
  const section = '/' + sectionSelection.value + '/'
  return mounted.value && sections.includes(section) ? section : ''
})
const currentPath = computed(() => '/' + page.value.relativePath)
const defaultGroups = computed(() => getSidebar(theme.value.sidebar, page.value.relativePath))
const activeSection = computed(() => indexMode.value ? '/hilfe/' : referenceMode.value ? '/programmreferenz/'
  : selectedSection.value || defaultGroups.value[0]?.items?.[0]?.link || '')
const readingGroups = computed(() => {
  const groups = theme.value.sidebar[activeSection.value]
  return groups ? contextualSidebar(groups, activeSection.value, currentPath.value) : defaultGroups.value
})
const readingEntries = computed(() => readingGroups.value.length ? sectionEntries(readingGroups.value, activeSection.value) : [])
function adjacentInSection(offset: number) {
  const position = readingEntries.value.findIndex(entry => entry.key === articlePath(currentPath.value))
  const entry = position < 0 ? undefined : readingEntries.value[position + offset]
  return entry ? { text: entry.text, link: entry.link } : false
}
const helpSidebar = computed(() => theme.value.sidebar['/hilfe/'].map(group => ({
  ...group,
  items: group.items.map(item => item.link === '/hilfe/alle-artikel'
    ? { ...item, collapsed: false, items: articles.map(article => ({ text: article.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'), link: articleIndexLink(article.url) })) }
    : item)
})))
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
  const id = referenceActiveId(reference, referenceSelection.value, route)
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
    sidebar: indexMode.value ? helpSidebar.value : selectedSection.value && !referenceMode.value ? readingGroups.value : theme.value.sidebar
  })),
  frontmatter: computed(() => indexMode.value ? {
    ...frontmatter.value,
    ...(indexHome.value ? { layout: 'doc', aside: false } : {}),
    prev: adjacentArticle(-1), next: adjacentArticle(1)
  } : referenceMode.value ? {
    ...frontmatter.value, prev: adjacentReference(-1), next: adjacentReference(1)
  } : selectedSection.value ? {
    ...frontmatter.value, prev: adjacentInSection(-1), next: adjacentInSection(1)
  } : frontmatter.value)
})
</script>

<template>
  <div :class="{ 'program-reference-view': referenceMode }">
    <DefaultTheme.Layout>
      <template #doc-before><VPHome v-if="indexHome" /><ArticlePrintIcon v-if="!page.relativePath.startsWith('druck/')" :key="page.relativePath" /></template>
      <template #sidebar-nav-before>
        <ReferenceSidebar v-if="referenceMode" />
        <div v-if="referenceMode" class="reference-areas">
          <VPSidebarGroup :items="referenceAreas" />
        </div>
      </template>
    </DefaultTheme.Layout>
  </div>
</template>
