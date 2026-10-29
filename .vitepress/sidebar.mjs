import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { contextualSidebar } from './section-navigation.mjs'
const descendants = items => items.flatMap(item => [item, ...descendants(item.items || [])])

// Explicit article menus take precedence; legacy topics use overview links.
// Different route configurations reset VitePress's collapse state when the
// reader moves to another topic, including via search or a direct article URL.
export function createSidebar(navigation, root = new URL('../', import.meta.url)) {
  const result = {}
  const exactArticles = {}
  const nativeArticles = new Set()
  for (const [section, groups] of Object.entries(navigation.sidebar)) {
    const explicitTopics = new Set(groups[0].items.filter(item => item.items?.length).map(item => item.link))
    const topics = groups[0].items.map(item => {
      if (item.items?.length) return { ...item, collapsed: true }
      if (item.link.endsWith('/') || item.link.startsWith('/druck/')) return item
      const source = readFileSync(fileURLToPath(new URL(`.${item.link}.md`, root)), 'utf8')
      const items = [...source.matchAll(/^- \[([^\]]+)\]\((\/[^\s)]+)\)/gm)]
        .map(([, text, link]) => ({ text, link }))
        .filter(item => !/^\/(?:dateien|bilder\/wiki)\//.test(item.link))
      if (!items.length) return item
      return { ...item, collapsed: true, items }
    })
    const forTopic = active => [
      { ...groups[0], items: topics.map(item => item.items
        ? { ...item, collapsed: item.link !== active }
        : item) },
      ...groups.slice(1)
    ]
    for (const item of descendants(topics)) {
      if (item.link?.startsWith(section) && !item.link.includes('#') && !item.link.endsWith('/')) {
        nativeArticles.add(`${item.link}.md`)
      }
    }
    // The program reference reuses nearly every article. Its entries must never
    // take ownership of those normal URLs; reference visits use ?referenz=.
    for (const topic of section === '/programmreferenz/' ? [] : topics.filter(item => item.items)) {
      const sidebar = forTopic(topic.link)
      // Exact overview file and descendant directory, without prefix collisions.
      result[`${topic.link}.md`] = sidebar
      result[`${topic.link}/`] = sidebar
      // A task can group articles whose preserved URL lives in another directory.
      for (const article of descendants(topic.items)) {
        if (explicitTopics.has(topic.link) && article.link?.startsWith('/') && !article.link.includes('#') && !article.link.startsWith(`${topic.link}/`)) {
          exactArticles[`${article.link}.md`] = sidebar
        }
      }
    }
    // VitePress sorts by directory depth; the overview file and the section
    // have equal depth, so the specific overview must precede the section.
    result[section] = forTopic(null)
  }
  // The image catalogue belongs to Help while keeping its existing public URL.
  if (result['/hilfe/']) result['/bilder/'] = result['/hilfe/']
  for (const section of Object.keys(navigation.sidebar)) {
    result[`/druck/${section.slice(1, -1)}.md`] = result[section]
  }
  // File matches must precede directory matches at equal path depth.
  // A cross-reference may reuse an article, but cannot replace a native menu
  // that already lists it. This also keeps search/direct visits predictable.
  for (const route of nativeArticles) delete exactArticles[route]
  return Object.fromEntries(Object.entries({ ...exactArticles, ...result }).map(([route, groups]) => {
    const section = groups[0].items[0].link
    return [route, contextualSidebar(groups, section, route)]
  }))
}
