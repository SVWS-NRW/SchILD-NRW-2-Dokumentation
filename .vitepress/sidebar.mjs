import { contextualSidebar, articlePath } from './section-navigation.mjs'

// Native addresses determine direct visits. Shared articles retain the context
// selected in the sidebar through the independent rubrik parameter.
export function createSidebar(navigation) {
 const result = {}, owners = new Map()
 const sections = Object.keys(navigation.sidebar).sort((a,b)=>b.length-a.length)
 const visit = (items,section) => {
  for (const item of items) {
   if (item.link?.startsWith('/') && !item.link.includes('#') && !item.link.startsWith('/druck/')) {
    const key=articlePath(item.link), native=key===section.slice(0,-1)||key.startsWith(section)
    const prior=owners.get(key)
    if(!prior || (native&&!prior.native)) owners.set(key,{section,native})
   }
   visit(item.items||[],section)
  }
 }
 for(const section of sections.filter(s=>s!=='/programmreferenz/')) visit(navigation.sidebar[section][0].items,section)
 for(const [key,{section}] of owners) result[key+'.md']=contextualSidebar(navigation.sidebar[section],section,key)
 for(const section of sections) {
  result[section]=contextualSidebar(navigation.sidebar[section],section,section)
  const print='/druck/'+section.slice(1,-1)+'.md'
  result[print]=contextualSidebar(navigation.sidebar[section],section,print)
 }
 for(const tool of navigation.sidebar['/tools/'][0].items.filter(item=>item.items)) {
  for(const item of tool.items.filter(item=>item.link?.startsWith('/druck/'))) {
   result[item.link.replace(/\.html$/,'.md')]=contextualSidebar(navigation.sidebar['/tools/'],'/tools/',tool.link)
  }
 }
 result['/bilder/']=result['/hilfe/']
 return result
}
