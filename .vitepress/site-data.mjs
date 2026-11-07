import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
export function verifyBuiltHtml(config) {
  for (const page of ['404.md', ...config.pages]) {
    const target = (config.rewrites.map[page] || page).replace(/\.md$/, '.html')
    const html = readFileSync(join(config.outDir, target), 'utf8')
    if (!html.includes('<html') || !html.trimEnd().endsWith('</html>')) {
      throw new Error(`Incomplete VitePress HTML output: ${target}`)
    }
  }
}

// Retired stubs do not appear in content, search or menus. Existing bookmarks
// still lead directly to the useful replacement article on a static host.
export function writeArticleRedirects(config) {
  const manifest = new URL('./redirects.json', import.meta.url)
  if (!existsSync(manifest)) return
  const retired = JSON.parse(readFileSync(manifest, 'utf8'))
  const entries = [...retired, {path:'tools/handbuecher.md',replacement:'/tools/'}]
  for (const entry of entries) {
    const [route, anchor] = entry.replacement.split('#')
    const base = (config.site?.base || config.base || '/').replace(/\/$/, '')
    const target = base + route + (route.endsWith('/') || /\.[a-z0-9]+$/i.test(route) ? '' : '.html') + (anchor ? '#' + anchor : '')
    const file = join(config.outDir, entry.path.replace(/\.md$/, '.html'))
    mkdirSync(join(file, '..'), {recursive:true})
    writeFileSync(file, '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Artikel öffnen</title></head><body><p><a href="' + target + '">Artikel öffnen</a></p><script>location.replace(' + JSON.stringify(target) + (anchor ? '' : '+location.hash') + ')</script></body></html>')
  }
}
