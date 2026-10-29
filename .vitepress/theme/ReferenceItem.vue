<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { referenceLink } from '../reference-navigation.mjs'

type Node = { id: string; text: string; link?: string; items?: Node[]; sections?: Node[] }
const props = defineProps<{ node: Node; activeId: string }>()
const children = computed(() => props.node.items || [])
const containsActive = (node: Node): boolean => node.id === props.activeId || (node.items || []).some(containsActive)
const open = computed(() => containsActive(props.node))
const href = computed(() => props.node.link ? withBase(referenceLink(props.node)) : undefined)
function toggle(event: Event) {
  const current = event.target as HTMLDetailsElement
  if (!current.open) return
  const list = current.parentElement?.parentElement
  if (!list) return
  for (const li of Array.from(list.children)) {
    const other = li.firstElementChild
    if (other instanceof HTMLDetailsElement && other !== current) other.open = false
  }
}
</script>

<template>
  <li>
    <details v-if="children.length" :open="open" @toggle="toggle">
      <summary :class="{ 'reference-ancestor': open }">
        <a v-if="href" :href="href" :class="{ 'reference-active': activeId === node.id }" :aria-current="activeId === node.id ? 'page' : undefined" @click.stop>{{ node.text }}</a>
        <span v-else>{{ node.text }}</span>
        <span class="reference-caret" aria-hidden="true"><span class="vpi-chevron-right" /></span>
      </summary>
      <ul>
        <ReferenceItem v-for="child in children" :key="child.id" :node="child" :active-id="activeId" />
      </ul>
    </details>
    <a v-else-if="href" :href="href" :class="{ 'reference-active': activeId === node.id }" :aria-current="activeId === node.id ? 'page' : undefined">{{ node.text }}</a>
    <span v-else class="reference-undocumented" title="Hierzu liegt keine passende Anleitung vor">{{ node.text }}</span>
  </li>
</template>
