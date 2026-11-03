import { computed, ref, watchEffect, watchPostEffect, type Ref } from 'vue'
import { useData } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared.js'

// Retain the rest of VitePress 1.6's sidebar behaviour. Its default control
// treats all links to an article as active, ignoring their menu occurrence.
export * from 'vitepress/dist/client/theme-default/composables/sidebar.js'

type Item = {
  link?: string
  collapsed?: boolean
  sidebarActive?: boolean
  items?: Item[]
}

export function useSidebarControl(item: Ref<Item>) {
  const { page, hash } = useData()
  const collapsed = ref(false)
  const collapsible = computed(() => item.value.collapsed != null)
  const isLink = computed(() => !!item.value.link)
  const active = (node: Item): boolean => {
    // Read hash so same-page anchor navigation still updates fallback entries.
    void hash.value
    return typeof node.sidebarActive === 'boolean'
      ? node.sidebarActive
      : isActive(page.value.relativePath, node.link)
  }
  const contains = (node: Item): boolean => active(node) || !!node.items?.some(contains)
  const isActiveLink = computed(() => active(item.value))
  const hasActiveLink = computed(() => contains(item.value))
  const hasChildren = computed(() => !!item.value.items?.length)
  watchEffect(() => { collapsed.value = !!(collapsible.value && item.value.collapsed) })
  watchPostEffect(() => {
    if (isActiveLink.value || hasActiveLink.value) collapsed.value = false
  })
  function toggle() {
    if (collapsible.value) collapsed.value = !collapsed.value
  }
  return { collapsed, collapsible, isLink, isActiveLink, hasActiveLink, hasChildren, toggle }
}
