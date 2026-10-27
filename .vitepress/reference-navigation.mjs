// Use the visible menu order: overview, area introductions, groups and articles.
// Section anchors belong to their article and never become separate pager steps.
export function referenceLink(node) {
  const link = node.link
  if (!link || link.startsWith('/programmreferenz/')) return link
  const [path, anchor] = link.split('#')
  return path + '?referenz=' + node.id + (anchor ? '#' + anchor : '')
}

export function referenceEntries(reference) {
  const entries = [{ id: '', text: 'Programmreferenz', link: '/programmreferenz/' }]
  function visit(node) {
    if (node.link?.includes('#')) return
    if (node.link) entries.push({ id: node.id, text: node.text, link: referenceLink(node) })
    for (const child of node.items || []) visit(child)
  }
  for (const tab of reference.tabs) visit(tab)
  return entries
}

export function referenceActiveId(reference, selection, route) {
  function find(node) {
    if (selection
      ? node.id === selection || node.sections?.some(section => section.id === selection) || node.items?.some(child => child.id === selection && child.link?.includes('#'))
      : node.link === route) return node.id
    for (const child of node.items || []) {
      if (child.link?.includes('#')) continue
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
