<script setup lang="ts">
import { withBase } from 'vitepress'

const links = [
  { text: 'Impressum', href: '/impressum.html' },
  { text: 'Datenschutzerklärung', href: '/datenschutz.html' },
  { text: 'Barrierefreiheitserklärung', href: '/barrierefreiheit.html' },
  { text: 'Leichte Sprache', href: '/leichtesprache.html' },
  { text: 'Lizenz', href: '/LICENSE.html' }
]
</script>

<template>
  <footer class="site-footer">
    <nav aria-label="Rechtliche Informationen und Leichte Sprache">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="withBase(link.href)">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  border-top: 1px solid var(--vp-c-divider);
  padding: 20px 16px;
  background: var(--vp-c-bg);
  font-size: 14px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 0;
}

li + li::before {
  content: '';
  border-inline-start: 1px solid var(--vp-c-divider);
}

a {
  display: inline-block;
  padding: 4px 10px;
  color: var(--vp-c-text-1);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media print {
  .site-footer { display: none; }
}
</style>
