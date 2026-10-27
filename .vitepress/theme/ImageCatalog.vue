<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import catalog from '../image-catalog.json'

const search = ref('')
const folder = ref('')
const limit = ref(24)
const copied = ref('')
const copyError = ref('')
const folders = [...new Set(catalog.map(image => image.folder))].sort((a,b) => a.localeCompare(b, 'de'))
const normalize = (value: string) => value.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const searchable = catalog.map(image => ({ image, text: normalize([image.path, image.original, ...image.captions, ...image.articles.map(article => article.title)].join(' ')) }))
const filtered = computed(() => {
  const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean)
  return searchable.filter(({image,text}) => (!folder.value || image.folder === folder.value) && terms.every(term => text.includes(term))).map(({image}) => image)
})
const visible = computed(() => filtered.value.slice(0, limit.value))
watch([search, folder], () => { limit.value = 24 })
function snippet(image: typeof catalog[number]) {
  const label = (image.captions[0] || image.title).replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\n/g, ' ')
  return `![${label}](${image.path})`
}
async function copy(image: typeof catalog[number]) {
  copyError.value = ''
  try {
    await navigator.clipboard.writeText(snippet(image))
    copied.value = image.path
  } catch {
    copyError.value = 'Kopieren ist hier nicht verfügbar. Bitte den Markdown-Code im Textfeld markieren und kopieren.'
  }
}
</script>

<template>
  <section class="image-catalog" aria-label="Bilder suchen und wiederverwenden">
    <div class="catalog-filters">
      <label>Suchbegriff
        <input v-model="search" type="search" placeholder="Zum Beispiel: Individualdaten, Serienbrief, Zeugnis" />
      </label>
      <label>Themenordner
        <select v-model="folder">
          <option value="">Alle Themenordner</option>
          <option v-for="name in folders" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
    </div>
    <p role="status">{{ filtered.length }} von {{ catalog.length }} Bildern · {{ visible.length }} angezeigt</p>
    <p v-if="copyError" role="alert">{{ copyError }}</p>
    <div class="catalog-grid">
      <article v-for="image in visible" :key="image.path" class="catalog-card">
        <a :href="image.path" target="_blank" rel="noopener" :aria-label="`Originalbild öffnen: ${image.original}`">
          <img :src="image.path" :alt="image.captions[0] || image.original" loading="lazy" />
        </a>
        <h2>{{ image.title }}</h2>
        <code class="catalog-path">{{ image.path }}</code>
        <p v-if="image.captions.length">{{ image.captions[0] }}</p>
        <label>Markdown zum Einfügen
          <textarea readonly :value="snippet(image)" rows="3" @focus="($event.target as HTMLTextAreaElement).select()" />
        </label>
        <button type="button" @click="copy(image)">{{ copied === image.path ? 'Kopiert' : 'Markdown kopieren' }}</button>
        <details>
          <summary>Verwendet in {{ image.articles.length }} Artikel{{ image.articles.length === 1 ? '' : 'n' }}</summary>
          <ul><li v-for="article in image.articles" :key="article.link"><a :href="article.link">{{ article.title }}</a></li></ul>
          <p class="catalog-original">Originalname: {{ image.original }}</p>
        </details>
      </article>
    </div>
    <p v-if="!filtered.length">Keine Bilder gefunden. Bitte einen anderen Suchbegriff oder Themenordner wählen.</p>
    <button v-if="visible.length < filtered.length" type="button" @click="limit += 24">Weitere 24 Bilder anzeigen</button>
  </section>
</template>

<style scoped>
.catalog-filters { display: grid; gap: 16px; grid-template-columns: minmax(0,2fr) minmax(0,1fr); }
.image-catalog label { display: block; font-size: 13px; font-weight: 600; }
.image-catalog input, .image-catalog select, .image-catalog textarea { display: block; width: 100%; margin-top: 6px; padding: 8px; border: 1px solid var(--vp-c-divider); border-radius: 6px; color: var(--vp-c-text-1); background: var(--vp-c-bg); }
.image-catalog input:focus-visible, .image-catalog select:focus-visible, .image-catalog textarea:focus-visible, .image-catalog button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.catalog-grid { display: grid; gap: 20px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.catalog-card { min-width: 0; padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; }
.catalog-card img { width: 100%; height: 180px; object-fit: contain; background: var(--vp-c-bg-alt); }
.catalog-card h2 { border: 0; margin: 16px 0 8px; padding: 0; font-size: 16px; line-height: 1.5; overflow-wrap: anywhere; }
.catalog-path { display: block; white-space: normal; overflow-wrap: anywhere; font-size: 12px; }
.catalog-card textarea { resize: vertical; font-size: 12px; font-family: var(--vp-font-family-mono); }
.image-catalog button { margin: 12px 0; padding: 7px 12px; border: 1px solid var(--vp-c-brand-1); border-radius: 6px; color: var(--vp-c-brand-1); font-weight: 600; cursor: pointer; }
.catalog-card details { margin-top: 12px; font-size: 13px; }
.catalog-card summary { cursor: pointer; }
.catalog-original { overflow-wrap: anywhere; }
@media (max-width: 640px) { .catalog-filters, .catalog-grid { grid-template-columns: 1fr; } }
</style>
