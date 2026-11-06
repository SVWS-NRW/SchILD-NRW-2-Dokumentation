import { articlePath, createReadingMenu } from './section-navigation.mjs'

// One tree per rubric. The lookup only records which tree owns a direct visit.
export function createSidebar(navigation) {
  const menus = new Map()
  const owners = new Map()
  const sections = Object.keys(navigation.sidebar)
  const orderedSections = [
    ...sections.filter(section => section !== '/programmreferenz/').sort((a, b) => b.length - a.length),
    '/programmreferenz/'
  ]
  for (const section of orderedSections) {
    const menu = createReadingMenu(navigation.sidebar[section], section)
    menus.set(section, menu)
    for (const path of menu.paths) {
      const native = path === articlePath(section) || path.startsWith(section)
      const owner = owners.get(path)
      if (!owner || (native && !owner.native)) owners.set(path, { section, native })
    }
  }
  for (const tool of navigation.sidebar['/tools/'][0].items) {
    if (tool.printLink) owners.set(articlePath(tool.printLink), { section: '/tools/' })
  }
  owners.set('/bilder', { section: '/hilfe/' })
  return {
    menuFor: section => menus.get(section),
    sectionFor: route => owners.get(articlePath(route))?.section || ''
  }
}
