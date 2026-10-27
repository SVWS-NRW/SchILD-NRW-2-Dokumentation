import { createContentLoader } from 'vitepress'
import navigation from './navigation.json' with { type: 'json' }
import reference from './program-reference.json' with { type: 'json' }
import { createSidebar } from './sidebar.mjs'
import { sectionPrintEntries, canonicalArticle } from './section-print.mjs'

export function printNavigation() {
  const sidebar = createSidebar(navigation)
  const groups = sidebar['/programmreferenz/']
  const referenceNode = node => ({ ...node, items: (node.items || []).filter(child => !child.link?.includes('#')).map(referenceNode) })
  sidebar['/programmreferenz/'] = [{ ...groups[0], items: [...groups[0].items, ...reference.tabs.map(referenceNode)] }, ...groups.slice(1)]
  return { sidebar }
}

const escapeHtml = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

export function createSectionPrintLoader(section) {
  const menus = printNavigation()
  const entries = sectionPrintEntries(menus, section)
  const title = menus.sidebar[section][0].text
  const loader = createContentLoader(entries.map(entry => entry.path), {
    render: true,
    async transform(pages) {
      const byKey = new Map(pages.map(page => [canonicalArticle(page.url), page]))
      const articles = []
      for (const entry of entries) {
        const page = byKey.get(entry.key)
        if (!page?.html) throw new Error(`Print article missing: ${entry.path}`)
        const title = page.frontmatter.title || page.html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<a\b[^>]*class="header-anchor"[\s\S]*?<\/a>/, '').replace(/<[^>]+>/g, '').trim() || entry.label
        let html = page.html
        if (entry.key === '/hilfe/alle-artikel') {
          const { default: articleIndex } = await import('../hilfe/artikel.data.mjs')
          const index = await articleIndex.load()
          html = html.replace(/<p>\{\{ articles.length \}\}[\s\S]*?<\/p>/, `<p>${index.length} Seiten · Mit der Browsersuche (Strg+F) finden Sie einen Titel.</p>`)
            .replace(/<ol class="article-index">[\s\S]*?<\/ol>/, `<ol>${index.map(article => `<li><a href="${escapeHtml(article.url)}">${escapeHtml(article.title)}</a></li>`).join('')}</ol>`)
        }
        html = html.replace(/<ImageCatalog\s*\/>/g, '<p>Die interaktive Bildsuche und die Markdown-Vorlagen stehen im <a href="/bilder/">Bilderkatalog der Online-Dokumentation</a> zur Verfügung.</p>')
        articles.push({ ...entry, title, html })
      }
      return { title, articles }
    }
  })
  return { ...loader, watch: [...loader.watch, '.vitepress/navigation.json', '.vitepress/program-reference.json'], load() { return loader.load() } }
}
