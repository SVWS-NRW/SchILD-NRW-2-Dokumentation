// VitePress embeds the full site data in every built HTML page. Multi-sidebar
// configurations contain many equal subtrees; preserve them as shared objects
// in the inline assignment instead of repeating their JSON on every page.
// The resulting object has the same keys, values and ordering as JSON.parse.
import { readFileSync } from 'node:fs'
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
  return html.replace(/(window\.__VP_SITE_DATA__\s*=\s*)JSON\.parse\(("(?:\\.|[^"\\])*")\)/, (match, assignment, literal) => {
    let packed = cache.get(literal)
    if (!packed) {
      const source = JSON.parse(JSON.parse(literal))
      packed = packJson(source)
      // Keep the original form if it is smaller for a tiny configuration.
      if (packed.length >= match.length - assignment.length) return match
      cache.set(literal, packed)
    }
    return assignment + packed
  })
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
