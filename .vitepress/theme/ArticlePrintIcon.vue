<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { printDocument } from './print-document.mjs'
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
  <Teleport v-if="heading" :to="heading"><span class="article-print-controls">
    <button class="article-print-icon" type="button" :disabled="busy" :aria-busy="busy" aria-label="Diesen Artikel drucken oder als PDF speichern" title="Diesen Artikel drucken / PDF speichern" @click="printArticle">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/><path d="M17 12h2"/></svg>
    </button>
    <span v-if="error" class="print-action-error" role="alert">{{ error }}</span>
  </span></Teleport>
</template>
