// Use the visible menu order: overview, area introductions, groups and articles.
// Section anchors belong to their article and never become separate pager steps.
export function createReferenceLinks(reference, sectionFor) {
  const counts = new Map()
  for (const entry of referenceEntries(reference).slice(1)) {
    counts.set(entry.link, (counts.get(entry.link) || 0) + 1)
  }
  return node => {
    if (!node.link || node.link.startsWith('/programmreferenz/')) return node.link
    const [path, anchor] = node.link.split('#')
    const query = counts.get(path) > 1 ? '?referenz=' + node.id
      : sectionFor(path) === '/programmreferenz/' ? '' : '?referenz'
    return path + query + (anchor ? '#' + anchor : '')
  }
}

export function referenceEntries(reference, linkFor = node => node.link) {
  const entries = [{ id: '', text: 'Programmreferenz', link: '/programmreferenz/' }]
  function visit(node) {
    if (node.link && !node.link.includes('#')) entries.push({ id: node.id, text: node.text, link: linkFor(node) })
    for (const child of node.items || []) visit(child)
  }
  for (const tab of reference.tabs) visit(tab)
  return entries
}

export function referenceActiveId(reference, selection, route) {
  // Existing deep links retain their article/anchor, but select its one menu entry.
  selection = reference.aliases?.[selection] || selection
  function find(node) {
    if (selection
      ? node.id === selection || node.sections?.some(section => section.id === selection)
      : node.link === route) return node.id
    for (const child of node.items || []) {
      const found = find(child)
      if (found) return found
    }
    return ''
  }
  for (const tab of reference.tabs) {
    const found = find(tab)
    if (found) return found
  }
  return ''
}

// An in-article menu command still uses its enclosing article's pager position.
export function referencePageId(reference, selection, route) {
  selection = reference.aliases?.[selection] || selection
  const entries = referenceEntries(reference)
  if (selection && entries.some(entry => entry.id === selection)) return selection
  function find(node, parents = []) {
    const chain = [...parents, node]
    if (node.id === selection) {
      const path = node.link?.split('#')[0]
      return [...chain].reverse().find(parent => parent.link === path && !parent.link.includes('#'))?.id
        || entries.find(entry => entry.link.split('?')[0] === path)?.id || ''
    }
    for (const child of node.items || []) {
      const found = find(child, chain)
      if (found) return found
    }
    return ''
  }
  for (const tab of reference.tabs) {
    const found = find(tab)
    if (found) return found
  }
  return referenceActiveId(reference, '', route)
}
