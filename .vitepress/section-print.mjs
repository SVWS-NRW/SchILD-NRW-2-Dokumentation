export function canonicalArticle(url, base = '/') {
  const path = new URL(url, 'https://docs.invalid').pathname
  const relative = base !== '/' && path.startsWith(base) ? '/' + path.slice(base.length) : path
  return relative.replace(/\/index\.(?:md|html)$/, '/').replace(/\.(?:md|html)$/, '').replace(/\/$/, '') || '/'
}

export function sectionPrintEntries(navigation, section) {
  const group = navigation.sidebar[section]?.[0]
  if (!group) throw new Error(`Unknown print section: ${section}`)
  const seen = new Set()
  const entries = []
  const visit = (item, depth) => {
    if (item.link?.startsWith('/druck/')) return
    if (item.link?.startsWith('/')) {
      const key = canonicalArticle(item.link)
      if (!seen.has(key)) {
        seen.add(key)
        const path = key === '/' ? '/index.md' : item.link.endsWith('/') ? key + '/index.md' : key + '.md'
        entries.push({ key, path: path.slice(1), url: item.link.endsWith('/') ? key + '/' : key + '.html', label: item.text, depth, id: `artikel-${entries.length + 1}` })
      }
    }
    for (const child of item.items || []) visit(child, depth + 1)
  }
  for (const item of group.items) visit(item, 0)
  return entries
}

// Prefix anchors and resolve article links inside the combined document.
export function sectionArticleHtml(entry, entries, base = '/') {
  const targets = new Map(entries.map(article => [article.key, article.id]))
  const source = new URL(entry.url, 'https://docs.invalid')
  const withBase = path => base === '/' || path.startsWith(base) ? path : base.slice(0, -1) + path
  let html = entry.html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  html = html.replace(/\bid="([^"]+)"/g, (_, id) => `id="${entry.id}-${id}"`)
  html = html.replace(/\bhref="([^"]+)"/g, (all, href) => {
    const url = new URL(href.replace(/&amp;/g, '&'), source)
    if (url.origin !== source.origin) return all
    const target = targets.get(canonicalArticle(url.pathname, base))
    if (target) {
      const fragment = url.hash ? '-' + decodeURIComponent(url.hash.slice(1)) : ''
      return `href="#${target}${fragment}"`
    }
    return `href="${withBase(url.pathname)}${url.search}${url.hash}"`
  })
  html = html.replace(/\bsrc="(\/[^"/][^"]*)"/g, (_, path) => `src="${withBase(path)}"`)
  html = html.replace(/<(\/?)(h[1-6])\b/g, (_, closing, heading) => `<${closing}h${Math.min(6, Number(heading[1]) + 1)}`)
  return html
}
