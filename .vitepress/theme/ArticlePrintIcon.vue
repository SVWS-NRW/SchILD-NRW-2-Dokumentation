<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { useData } from 'vitepress'
import { printDocument } from './print-document.mjs'
const { page } = useData()
const editorLinks = computed(() => {
  if (page.value.relativePath.startsWith('druck/')) return null
  const source = page.value.relativePath === 'hilfe/mitarbeiten.md' ? 'CONTRIBUTING.md' : page.value.relativePath
  const path = source.split('/').map(encodeURIComponent).join('/')
  return {
    github: `https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/edit/dev/${path}`,
    vscode: `https://github.dev/SVWS-NRW/SchILD-NRW-2-Dokumentation/blob/dev/${path}`
  }
})
const heading = ref(null)
onMounted(async () => { await nextTick(); heading.value = document.querySelector('.vp-doc h1') })
const busy = ref(false)
const error = ref('')
async function printArticle() {
  busy.value = true
  error.value = ''
  try { await printDocument() }
  catch { error.value = 'Die Bilder konnten nicht vollständig geladen werden. Bitte versuchen Sie es erneut.' }
  finally { busy.value = false }
}
</script>

<template>
  <Teleport v-if="heading" :to="heading"><span class="article-print-controls" :class="{ 'has-edit-links': editorLinks }">
    <button class="article-print-icon" type="button" :disabled="busy" :aria-busy="busy" aria-label="Diesen Artikel drucken oder als PDF speichern" title="Diesen Artikel drucken / PDF speichern" @click="printArticle">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/><path d="M17 12h2"/></svg>
    </button>
    <a v-if="editorLinks" class="article-print-icon article-editor-link" :href="editorLinks.github" target="_blank" rel="noopener noreferrer" aria-label="Artikel im GitHub-Dateieditor bearbeiten (neuer Tab)" title="Im GitHub-Dateieditor bearbeiten (neuer Tab)">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m15 5 4 4M4 20l4-1 12-12a2.8 2.8 0 0 0-4-4L4 15z"/></svg>
    </a>
    <a v-if="editorLinks" class="article-print-icon article-editor-link" :href="editorLinks.vscode" target="_blank" rel="noopener noreferrer" aria-label="Artikel in VS Code im Browser bearbeiten (neuer Tab)" title="In VS Code im Browser bearbeiten (neuer Tab)">VS</a>
    <span v-if="error" class="print-action-error" role="alert">{{ error }}</span>
  </span></Teleport>
</template>
