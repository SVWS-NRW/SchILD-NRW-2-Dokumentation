import { siteBase } from './site-base.mjs'
import { defineConfig } from 'vitepress'
import navigation from './navigation.json'
import { createSidebar } from './sidebar.mjs'
import { configureMarkdown, containerLabels } from './markdown.mjs'
import { compactSiteData, verifyBuiltHtml, writeArticleRedirects } from './site-data.mjs'

// VitePress must recognize spreadsheet links as files on server and client.
const extraExtensions = [...new Set([process.env.VITE_EXTRA_EXTENSIONS, 'ods', 'xlsx', 'dat', 'chm', 'spd', 'exe', 'doc', 'txt', 'mdb'].filter(Boolean))].join(',')
process.env.VITE_EXTRA_EXTENSIONS = extraExtensions

export default defineConfig({
  lang: 'de-DE',
  base: siteBase,
  vite: { define: { 'import.meta.env.VITE_EXTRA_EXTENSIONS': JSON.stringify(extraExtensions) } },
  title: 'SchILD-NRW 2',
  description: 'Dokumentation für SchILD-NRW 2: Praxisanleitungen, Reporting und Nachschlagewerk',
  srcExclude: ['README.md', 'UMSETZUNG.md', 'CONTRIBUTING.md', 'WORKFLOW.md', 'tests/**', 'scripts/**', 'node_modules/**', 'tmp/**', 'test-results/**'],
  transformHtml: compactSiteData,
  buildEnd(config) { verifyBuiltHtml(config); writeArticleRedirects(config) },
  markdown: {
    image: { lazyLoading: true },
    config: md => configureMarkdown(md, siteBase),
    container: containerLabels
  },
  themeConfig: {
    nav: navigation.nav,
    sidebar: createSidebar(navigation),
    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Vorheriges Thema', next: 'Nächstes Thema' },
    sidebarMenuLabel: 'Themen',
    returnToTopLabel: 'Nach oben',
    darkModeSwitchLabel: 'Darstellung',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Suchen', buttonAriaLabel: 'Dokumentation durchsuchen' },
          modal: {
            displayDetails: 'Detaillierte Treffer anzeigen',
            resetButtonTitle: 'Suche zurücksetzen',
            backButtonTitle: 'Suche schließen',
            noResultsText: 'Keine Ergebnisse für',
            footer: {
              selectText: 'auswählen', selectKeyAriaLabel: 'Eingabetaste',
              navigateText: 'navigieren', navigateUpKeyAriaLabel: 'Pfeil nach oben',
              navigateDownKeyAriaLabel: 'Pfeil nach unten',
              closeText: 'schließen', closeKeyAriaLabel: 'Escape'
            }
          }
        },
        // Alphabetical Wiki headings can contain several # links. The search
        // index must use the generated heading anchor, not the first such link.
        _render(src, env, md) {
          return md.render(src, env).replace(
            /<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/g,
            (_, level, attrs, content) => {
              const heading = content.replace(
                /<a\b([^>]*)>([\s\S]*?)<\/a>/g,
                (link, linkAttrs, label) => /class=["'][^"']*\bheader-anchor\b/.test(linkAttrs) ? link : label
              )
              return `<h${level}${attrs}>${heading}</h${level}>`
            }
          )
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation' }]
  }
})

