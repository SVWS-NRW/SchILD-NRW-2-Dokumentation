import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { referenceActiveId, referenceEntries, referencePageId } from '../.vitepress/reference-navigation.mjs'
import { printNavigation } from '../.vitepress/section-print-loader.mjs'
import { sectionPrintEntries } from '../.vitepress/section-print.mjs'
const reference=JSON.parse(fs.readFileSync('.vitepress/program-reference.json','utf8'))
const visit=items=>items.flatMap(item=>[item,...visit(item.items||[])])
const nodes=visit(reference.tabs)
const get=id=>nodes.find(node=>node.id===id)

test('Programmreferenz folgt Menüleiste, Filterbereichen und Schülerkarteireitern der Screenshots',()=>{
 assert.deepEqual(reference.tabs.slice(0,10).map(n=>n.text),['Datei','Schulverwaltung','Kataloge','Gruppenprozesse','Auswahl','Druckausgabe','Datenaustausch','Extras','Datenschutzhinweis','Hilfe'])
 assert.deepEqual(get('menue-62').items.map(n=>n.text),['Allgemeines','Fächer','Teilleistungen','Noten und Zeugnisvorbereitung','Lernabschnitte und Versetzung'])
 assert.deepEqual(get('menue-4').items.map(n=>n.text),['Klasse','Jahrgang','Kurs','Schulgliederung'])
 assert.deepEqual(get('menue-6').items.map(n=>n.text),['Individualdaten I','Individualdaten II','Erziehungsberechtigte','Schulbesuch','Weitere Adressen','Aktuelles Halbjahr','Laufbahninformationen','Fördermaßnahmen','Einwilligungen','KAoA','Übersicht','FHR','Abitur','ZP 10'])
 assert.deepEqual(get('menue-80').items.map(n=>n.text),['Initial-Export','Nur Schülerdaten exportieren','Nur Fächerdaten exportieren'])
 assert(get('austausch-weitere').items.some(n=>n.id==='menue-81'))
 assert(get('menue-69').items.some(n=>n.id==='druck-archiv'))
 assert(get('menue-87').items.some(n=>n.id==='extras-benutzerverwaltung'))
 assert(!get('reiter-kaoa').link,'Keine Anleitung zu KAoA erfinden')
})

test('Jeder Referenzlink erreicht einen vorhandenen Artikel oder einen belegten Abschnitt',()=>{
 assert.equal(nodes.length,new Set(nodes.map(n=>n.id)).size,'Referenzkennungen müssen eindeutig bleiben')
 for(const node of nodes){
  if(!node.link)continue
  const [route,anchor]=node.link.split('#')
  const file=route.slice(1)+(route.endsWith('/')?'index.md':'.md')
  assert(fs.existsSync(file),node.link)
  if(anchor)assert(fs.readFileSync(file,'utf8').includes(`id="${anchor}"`),`Abschnitt fehlt: ${node.link}`)
 }
})

test('Verschachtelte Abschnittsbefehle bleiben aktiv, blättern artikelweise und fehlen nicht im Druck',()=>{
 const id='lupo-schueler',route='/schild2/import-export-statistik/export-fuer-lupo'
 assert.equal(referenceActiveId(reference,id,route),id)
 assert.equal(referencePageId(reference,id,route),'menue-80')
 assert.equal(referencePageId(reference,'schnellfilter-klasse','/einstieg/grundlagen/hauptfenster'),'menue-2')
 const entries=referenceEntries(reference)
 assert(entries.some(n=>n.id==='menue-menue-6-3'),'Kinder unter einem Abschnitt dürfen nicht verschwinden')
 assert(!entries.some(n=>n.link.includes('#')),'Abschnitte sind keine eigenen Blätterschritte')
 const printed=sectionPrintEntries(printNavigation(),'/programmreferenz/')
 assert(printed.some(n=>n.key==='/schild2/schueler/individual-daten-i'))
 assert(printed.some(n=>n.key==='/reporting/verwaltung/report-aus-archiv-drucken'))
 assert.equal(printed.length,new Set(printed.map(n=>n.key)).size)
})
