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

export function createReadingMenu(groups, section) {
  const occurrences = new Map()
  const collect = (nodes, parent = []) => nodes.forEach((node, index) => {
    const position = [...parent, index]
    if (node.link?.startsWith('/')) {
      const path = articlePath(node.link)
      if (!occurrences.has(path)) occurrences.set(path, [])
      occurrences.get(path).push(position)
    }
    collect(node.items || [], position)
  })
  collect(groups[0].items)

  const decorate = (node, position) => {
    let link = node.link ? sectionLink(node.link, section) : undefined
    if (link?.startsWith('/') && occurrences.get(articlePath(link)).length > 1) {
      const url = new URL(link, 'https://docs.invalid')
      url.searchParams.set('menue', position.join('.'))
      link = url.pathname + url.search + url.hash
    }
    return {
      ...node,
      ...(link?.startsWith('/') && occurrences.get(articlePath(link)).length > 1 ? { sidebarActive: false } : {}),
      ...(link ? { link } : {}),
      ...(node.items?.length ? {
        collapsed: true,
        items: node.items.map((child, index) => decorate(child, [...position, index]))
      } : {})
    }
  }

  // Other rubrics deliberately change context and keep their original links.
  const tree = [{ ...groups[0], items: groups[0].items.map((node, index) => decorate(node, [index])) }, ...groups.slice(1)]
  const openBranch = (items, position, depth = 0) => {
    const index = position[depth]
    const node = items[index]
    const active = depth === position.length - 1
    const opened = { ...node, sidebarActive: active }
    if (node.items?.length) {
      opened.collapsed = false
      if (!active) opened.items = openBranch(node.items, position, depth + 1)
    }
    return items.map((item, i) => i === index ? opened : item)
  }

  return {
    tree,
    paths: occurrences.keys(),
    entries: sectionEntries(tree, section),
    forArticle(route, selection = '') {
      const matches = occurrences.get(articlePath(route))
      if (!matches) return tree
      const requested = selection || new URL(route, 'https://docs.invalid').searchParams.get('menue')
      const position = matches.find(match => match.join('.') === requested) || matches[0]
      return [{ ...tree[0], items: openBranch(tree[0].items, position) }, ...tree.slice(1)]
    }
  }
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
