import assert from 'node:assert/strict'
import fs from 'node:fs'
import { articlePath } from '../.vitepress/section-navigation.mjs'
const navigation=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const walk=items=>items.flatMap(item=>[item,...walk(item.items||[])])

export async function checkSectionMenus(page,base) {
 const prefix=new URL(base).pathname.replace(/\/$/,'')
 const cases=[]
 for(const [section,groups] of Object.entries(navigation.sidebar)) {
  if(section==='/programmreferenz/')continue // custom reference navigation tested separately
  const topics=groups[0].items.slice(2)
  const category=topics.find(item=>item.items?.some(child=>child.link))
  const candidate=category ? walk(category.items).find(x=>x.link?.startsWith('/')&&!x.link.includes('#')) : topics.find(x=>x.link)
  if(!candidate)continue
  cases.push({section,target:candidate.link,start:category?.link||candidate.link})
 }
 // A shared article must stay in either the working rubric or the tool rubric.
 cases.push({section:'/schild2/',start:'/zeugnisse/grundschule',target:'/tools/notenmodul-grundschule/leistungsdaten'})
 for(const scenario of cases) {
  const {start,target}=scenario
  let section=scenario.section
  const url=new URL(start,base)
  if(!url.pathname.endsWith('/')&&!url.pathname.endsWith('.html'))url.pathname+='.html'
  url.searchParams.set('rubrik',section.slice(1,-1))
  await page.goto(url.href,{waitUntil:'networkidle'})
  const link=page.locator('#VPSidebarNav a').filter({visible:true})
  const targetUrl=articlePath(target)
  const links=await link.evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')))
  const href=links.find(h=>h&&articlePath(h.replace(prefix,''))===targetUrl)
  assert(href,`Sichtbarer Artikel fehlt in ${section}: ${target}`)
  await page.locator('#VPSidebarNav a[href="'+href+'"]').first().click()
  await page.waitForLoadState('networkidle')
  if(section==='/tools/' && navigation.sidebar[articlePath(target)+'/'])section=articlePath(target)+'/'
  const check=async()=>{
   await page.waitForFunction(expected=>{const link=document.querySelector('#VPSidebarNav a');return link&&new URL(link.href).searchParams.get('rubrik')===expected},section.slice(1,-1))
   assert.equal(new URL(page.url()).searchParams.get('rubrik'),section.slice(1,-1))
   const overview=await page.locator('#VPSidebarNav').getByRole('link',{name:'Übersicht',exact:true}).first().getAttribute('href')
   assert.equal(articlePath(overview.replace(prefix,'')),articlePath(section),`Rubrik gewechselt: ${target}`)
   const active=await page.locator('.VPNavBarMenu > .active').evaluateAll(nodes=>nodes.map(node=>(node.querySelector(':scope > .button .text')||node).textContent.trim()))
   const label=section.startsWith('/tools/')?'Tools':section==='/schild2/'?'Arbeiten mit SchILD2':section==='/hilfe/'?'Hilfe':'Reporting'
   assert.deepEqual(active,[label])
  }
  await check();await page.reload({waitUntil:'networkidle'});await check()
  const next=page.locator('.VPDocFooter a.next')
  if(await next.count()) {
   await next.click();await page.waitForLoadState('networkidle');await check()
   await page.goBack({waitUntil:'networkidle'});await check()
  }
 }
 console.log(`${cases.length} Rubrik- und Toolmenüs mit Artikelklick, Neuladen und Weiterblättern geprüft.`)
}
