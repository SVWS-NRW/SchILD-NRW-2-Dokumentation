import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createSidebar } from '../.vitepress/sidebar.mjs'
import { referenceEntries, referenceLink } from '../.vitepress/reference-navigation.mjs'
import { articleIndexLink } from '../.vitepress/article-index.mjs'
import { sectionPrintEntries, sectionArticleHtml } from '../.vitepress/section-print.mjs'
const navigation = JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const reference = JSON.parse(fs.readFileSync('.vitepress/program-reference.json','utf8'))
const visit = items => items.flatMap(item => [item,...visit(item.items || [])])

test('Menüs führen auf vorhandene Artikel und jede Rubrik bietet Übersicht und Druck',()=>{
  assert.equal(navigation.nav.length,6)
  for (const [section,groups] of Object.entries(navigation.sidebar)) {
    assert.equal(groups[0].items[0].link,section)
    if(section!=='/quellen/') assert.equal(groups[0].items[1].link,`/druck/${section.slice(1,-1)}.html`)
    for (const node of visit(groups)) {
      if (!node.link?.startsWith('/')) continue
      const target=node.link.split(/[?#]/)[0].replace(/\.html$/,'')
      const file=target.endsWith('/') ? target.slice(1)+'index.md' : target.slice(1)+'.md'
      assert(fs.existsSync(file),`Menüziel fehlt: ${node.link}`)
    }
  }
  const sidebar=createSidebar(navigation)
  assert.equal(sidebar['/bilder/'][0].text,'Hilfe')
  assert.equal(sidebar['/hilfe/zusatzprogramme/prognos-analyseverfahren-klasse.md'][0].text,'Tools und Zusatzprogramme')
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
