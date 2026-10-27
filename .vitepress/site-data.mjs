// VitePress embeds the full site data in every built HTML page. Multi-sidebar
// configurations contain many equal subtrees; preserve them as shared objects
// in the inline assignment instead of repeating their JSON on every page.
// The resulting object has the same keys, values and ordering as JSON.parse.
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
export function packJson(value) {
  const nodes = new Map()
  const declarations = []
  const literal = value => JSON.stringify(value)
    .replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
  const encode = value => {
    if (value === null || typeof value !== 'object') return Object.is(value, -0) ? '-0' : literal(value)
    const key = JSON.stringify(value)
    if (nodes.has(key)) return nodes.get(key)
    const content = Array.isArray(value)
      ? `[${value.map(encode).join(',')}]`
      : `{${Object.entries(value).map(([key, child]) => `[${literal(key)}]:${encode(child)}`).join(',')}}`
    const name = `s${declarations.length}`
    declarations.push(`const ${name}=${content};`)
    nodes.set(key, name)
    return name
  }
  const result = encode(value)
  return `(()=>{${declarations.join('')}return ${result}})()`
}

const cache = new Map()
export function compactSiteData(html) {
  const match = /(window\.__VP_SITE_DATA__\s*=\s*)JSON\.parse\(/.exec(html)
  if (!match) return html
  const start = match.index + match[0].length
  if (html[start] !== '"') return html
  // A repeated-alternation regex can overflow V8's regex stack for a large
  // escaped navigation string. Scan the JSON string once instead.
  let end = start + 1
  while (end < html.length) {
    if (html[end] === '\\') { end += 2; continue }
    if (html[end] === '"') break
    end++
  }
  if (html[end + 1] !== ')') return html
  const literal = html.slice(start, end + 1)
  let packed = cache.get(literal)
  if (!packed) {
    packed = packJson(JSON.parse(JSON.parse(literal)))
    if (packed.length >= end + 2 - match.index - match[1].length) return html
    cache.set(literal, packed)
  }
  return html.slice(0,match.index) + match[1] + packed + html.slice(end + 2)
}

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
  const manifest = new URL('../migration/retired-articles.json', import.meta.url)
  if (!existsSync(manifest)) return
  const retired = JSON.parse(readFileSync(manifest, 'utf8'))
  const entries = [...retired, {path:'tools/handbuecher.md',replacement:'/tools/anleitungen'}]
  for (const entry of entries) {
    const [route, anchor] = entry.replacement.split('#')
    const base = (config.site?.base || config.base || '/').replace(/\/$/, '')
    const target = base + route + (route.endsWith('/') || /\.[a-z0-9]+$/i.test(route) ? '' : '.html') + (anchor ? '#' + anchor : '')
    const file = join(config.outDir, entry.path.replace(/\.md$/, '.html'))
    mkdirSync(join(file, '..'), {recursive:true})
    writeFileSync(file, '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Artikel öffnen</title></head><body><p><a href="' + target + '">Artikel öffnen</a></p><script>location.replace(' + JSON.stringify(target) + (anchor ? '' : '+location.hash') + ')</script></body></html>')
  }
}
