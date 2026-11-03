// Articles keep their canonical address. A menu visit carries its reading
// context separately, because one article can belong to several task menus.
export function articlePath(link) {
  return new URL(link, 'https://docs.invalid').pathname
    .replace(/\/(?:index\.(?:md|html))$/, '/')
    .replace(/\.(?:md|html)$/, '').replace(/\/$/, '') || '/'
}

export function sectionLink(link, section) {
  if (!link?.startsWith('/')) return link
  const url = new URL(link, 'https://docs.invalid')
  url.searchParams.delete('referenz')
  url.searchParams.delete('artikel')
  url.searchParams.set('rubrik', section.replace(/^\/|\/$/g, ''))
  return url.pathname + url.search + url.hash
}

export function contextualSidebar(groups, section, route, selection = '') {
  const current = articlePath(route)
  const entries = [], counts = new Map()
  const collect = (nodes, parents = []) => nodes.forEach((node, index) => {
    const id = [...parents, index].join('.')
    if (node.link?.startsWith('/')) {
      const path = articlePath(node.link)
      entries.push({ node, id, path })
      counts.set(path, (counts.get(path) || 0) + 1)
    }
    collect(node.items || [], [...parents, index])
  })
  collect(groups[0].items)
  const requested = selection || new URL(route, 'https://docs.invalid').searchParams.get('menue')
  const matches = entries.filter(entry => entry.path === current)
  const chosen = matches.find(entry => entry.id === requested) || matches[0]
  const contains = (node, id) => chosen?.id === id || (node.items || []).some((child, i) => contains(child, id + '.' + i))
  const decorate = (node, id) => {
    let link = node.link ? sectionLink(node.link, section) : undefined
    if (link?.startsWith('/') && counts.get(articlePath(link)) > 1) {
      const url = new URL(link, 'https://docs.invalid')
      url.searchParams.set('menue', id)
      link = url.pathname + url.search + url.hash
    }
    return { ...node,
      sidebarActive: chosen?.id === id,
      ...(link ? { link } : {}),
      ...(node.items?.length ? { collapsed: !contains(node, id), items: node.items.map((child, i) => decorate(child, id + '.' + i)) } : {})
    }
  }
  // 'Weitere Bereiche' deliberately changes sections; only the reading menu
  // inherits the current context.
  return [{ ...groups[0], items: groups[0].items.map((node, i) => decorate(node, String(i))) }, ...groups.slice(1)]
}

export function sectionEntries(groups, section) {
  const seen = new Set(), entries = []
  const visit = node => {
    if (node.link?.startsWith('/') && !node.link.includes('#') && !node.link.startsWith('/druck/')) {
      const key = articlePath(node.link)
      if (!seen.has(key)) {
        seen.add(key)
        entries.push({ key, text: node.text, link: sectionLink(node.link, section) })
      }
    }
    for (const child of node.items || []) visit(child)
  }
  for (const node of groups[0].items) visit(node)
  return entries
}

export function sectionForLink(link, sections) {
  const route = articlePath(link)
  if (route === '/bilder') return '/hilfe/'
  return [...sections].sort((a,b)=>b.length-a.length).find(section => route === section.slice(0,-1) || route.startsWith(section)) || ''
}

export function contextualNav(nav, activeSection, sections) {
  const decorate = item => {
    const section = item.link ? sectionForLink(item.link, sections) : ''
    return { ...item,
      ...(section ? { link: sectionLink(item.link, section) } : {}),
      ...(item.items ? { items: item.items.map(decorate) } : {})
    }
  }
  const contains = item => (item.link && sectionForLink(item.link, sections) === activeSection) || (item.items || []).some(contains)
  return nav.map(item => ({ ...decorate(item), activeMatch: activeSection && contains(item) ? '.*' : '^$' }))
}
