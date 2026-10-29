<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import reference from '../program-reference.json'
import { referenceSelection } from './reference-state'
import ReferenceItem from './ReferenceItem.vue'
import { referenceActiveId } from '../reference-navigation.mjs'
const { page } = useData()
const isOverview = computed(() => page.value.relativePath === 'programmreferenz/index.md')
const isPrint = computed(() => page.value.relativePath === 'druck/programmreferenz.md')
const activeId = computed(() => {
  const route = '/' + page.value.relativePath.replace(/\.md$/, '')
  return referenceActiveId(reference, referenceSelection.value, route)
})
</script>

<template>
  <div class="program-reference-menu">
    <h2 class="reference-title">Programmreferenz</h2>
    <ul :key="activeId">
      <li><a :href="withBase('/programmreferenz/')" :class="{ 'reference-active': isOverview }" :aria-current="isOverview ? 'page' : undefined">Übersicht</a></li>
      <li><a :href="withBase('/druck/programmreferenz.html')" :class="{ 'reference-active': isPrint }" :aria-current="isPrint ? 'page' : undefined">Druckansicht</a></li>
      <li class="reference-caption">SchILD-NRW 2 Menüs und Karteireiter</li>
      <ReferenceItem v-for="tab in reference.tabs" :key="tab.id" :node="tab" :active-id="activeId" />
    </ul>
  </div>
</template>
