import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createSidebar } from '../.vitepress/sidebar.mjs'
import { referenceEntries, referenceLink } from '../.vitepress/reference-navigation.mjs'
import { articleIndexLink } from '../.vitepress/article-index.mjs'
import { sectionPrintEntries, sectionArticleHtml } from '../.vitepress/section-print.mjs'
import { articlePath, contextualSidebar, sectionEntries, contextualNav, sectionLink } from '../.vitepress/section-navigation.mjs'
const navigation = JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const reference = JSON.parse(fs.readFileSync('.vitepress/program-reference.json','utf8'))
const visit = items => items.flatMap(item => [item,...visit(item.items || [])])

test('Menüs führen auf vorhandene Artikel und jede Rubrik bietet Übersicht und Druck',()=>{
  assert.equal(navigation.nav.length,5)
  for (const [section,groups] of Object.entries(navigation.sidebar)) {
    assert.equal(articlePath(groups[0].items[0].link),articlePath(section))
    assert.equal(groups[0].items[1].link,`/druck/${section.slice(1,-1)}.html`)
    for (const node of visit(groups)) {
      if (!node.link?.startsWith('/')) continue
      const target=node.link.split(/[?#]/)[0].replace(/\.html$/,'')
      const file=target.endsWith('/') ? target.slice(1)+'index.md' : target.slice(1)+'.md'
      assert(fs.existsSync(file),`Menüziel fehlt: ${node.link}`)
    }
  }
  const sidebar=createSidebar(navigation)
  assert.equal(sidebar['/bilder/'][0].text,'Hilfe')
  assert.equal(articlePath(sidebar['/tools/notenmodul-grundschule/leistungsdaten.md'][0].items[0].link),'/tools/notenmodul-grundschule')
  for (const [route, groups] of Object.entries(sidebar)) {
    if (route.startsWith('/programmreferenz/') || route==='/druck/programmreferenz.md') continue
    assert.notEqual(groups[0].items[0].link,'/programmreferenz/',`Referenz überschreibt normale Artikelroute: ${route}`)
  }
})

test('Jeder Artikelaufruf aus einem Rubrikmenü trägt seine Rubrik mit',()=>{
  const sidebar=createSidebar(navigation)
  for(const section of Object.keys(navigation.sidebar)) {
    for(const item of visit(sidebar[section][0].items)) {
      if(!item.link?.startsWith('/'))continue
      if(section==='/tools/' && new URL(item.link,'https://docs.invalid').pathname.match(/^\/tools\/[^/]+\/?$/))continue
      assert.equal(new URL(item.link,'https://docs.invalid').searchParams.get('rubrik'),section.slice(1,-1),item.link)
    }
    // Switching sections through 'Weitere Bereiche' must remain intentional.
    for(const group of sidebar[section].slice(1))for(const item of visit([group])) {
      if(item.link)assert(!item.link.includes('rubrik='),item.link)
    }
  }
})

test('Geteilte Artikel behalten Themenzweig, Pager und Hauptmenü ihrer gewählten Rubrik',()=>{
  const sidebar=createSidebar(navigation)
  const route='/tools/notenmodul-grundschule/leistungsdaten.html'
  for(const section of ['/tools/notenmodul-grundschule/','/schild2/']) {
    const groups=contextualSidebar(sidebar[section],section,route)
    assert.equal(articlePath(groups[0].items[0].link),articlePath(section))
    const entry=sectionEntries(groups,section).find(item=>item.key===articlePath(route))
    assert(entry,'Artikel muss in beiden gewählten Arbeitswegen vorhanden sein')
    assert.equal(new URL(entry.link,'https://docs.invalid').searchParams.get('rubrik'),section.slice(1,-1))
    const main=contextualNav(navigation.nav,section,Object.keys(navigation.sidebar))
    assert.deepEqual(main.filter(item=>item.activeMatch==='.*').map(item=>item.text),[section.startsWith('/tools/')?'Tools':'Arbeiten mit SchILD2'])
  }
  assert.equal(sectionLink('/artikel#abschnitt','/tools/'),'/artikel?rubrik=tools#abschnitt')
})

test('Referenz und A–Z behalten den gewählten Kontext, ohne Abschnitts-Doppelschritte',()=>{
  const entries=referenceEntries(reference)
  assert(entries.length>50)
  assert(!entries.some(entry=>entry.link.includes('#')))
  assert.equal(referenceLink({id:'a',link:'/aufgabe#abschnitt'}),'/aufgabe?referenz=a#abschnitt')
  assert.equal(articleIndexLink('/aufgabe.html?referenz=a#abschnitt'),'/aufgabe.html?artikel=az#abschnitt')
})

test('Rubrikdruck verwendet Originalartikel genau einmal und verknüpft Buchanker',()=>{
  const entries=sectionPrintEntries(navigation,'/tools/')
  assert.equal(entries.length,new Set(entries.map(entry=>entry.key)).size)
  assert(!entries.some(entry=>entry.path.startsWith('druck/')))
  const parts=[{key:'/a',id:'artikel-1'},{key:'/b',id:'artikel-2'}]
  const html=sectionArticleHtml({url:'/a.html',id:'artikel-1',html:'<h2 id="schritt">Schritt</h2><a href="/b.html#ziel">Weiter</a><a href="#schritt">Hier</a><img src="/bilder/beispiel.png">'},parts,'/doku/')
  assert(html.includes('id="artikel-1-schritt"'))
  assert(html.includes('href="#artikel-2-ziel"'))
  assert(html.includes('href="#artikel-1-schritt"'))
  assert(html.includes('src="/doku/bilder/beispiel.png"'))
})
