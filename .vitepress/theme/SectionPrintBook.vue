<script setup>
import { computed, ref } from 'vue'
import { withBase, useData } from 'vitepress'
import { sectionArticleHtml } from '../section-print.mjs'
import { printDocument } from './print-document.mjs'
const props = defineProps({ articles: { type: Array, required: true }, title: { type: String, required: true } })
const { site } = useData()
const entries = computed(() => props.articles.map(entry => ({ ...entry, content: sectionArticleHtml(entry, props.articles, site.value.base) })))
const busy = ref(false)
const error = ref('')
async function printBook() {
  busy.value = true
  error.value = ''
  try { await printDocument() }
  catch { error.value = 'Die Druckansicht konnte nicht vollständig vorbereitet werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.' }
  finally { busy.value = false }
}
</script>

<template>
  <div class="section-print-book">
    <div class="book-toolbar">
      <button type="button" :disabled="busy" @click="printBook">{{ busy ? 'Druckansicht wird vorbereitet …' : 'Rubrik drucken / als PDF speichern' }}</button>
      <p v-if="busy" role="status">Die Bilder aller Artikel werden geladen. Bei dieser umfangreichen Rubrik kann das einen Moment dauern.</p>
      <p v-if="error" role="alert">{{ error }}</p>
    </div>
    <p>Diese Anleitung enthält {{ entries.length }} Artikel und Übersichten aus „{{ title }}“. Sie folgt dem Menü der Rubrik. Jeder Artikel ist einmal enthalten; ergänzende Verweise führen zur Online-Dokumentation.</p>
    <nav class="book-toc" aria-label="Inhaltsverzeichnis der Druckansicht">
      <h2>Inhaltsverzeichnis</h2>
      <ol><li v-for="entry in entries" :key="entry.id" :class="{ 'book-child': entry.depth > 0 }"><a :href="'#' + entry.id">{{ entry.title }}</a></li></ol>
    </nav>
    <section v-for="entry in entries" :id="entry.id" :key="entry.id" class="book-article">
      <p class="book-article-source">Online: <a :href="withBase(entry.url)">{{ entry.title }}</a></p>
      <div v-html="entry.content" />
    </section>
  </div>
</template>
