import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
const navigation=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const walk=items=>items.flatMap(item=>[item,...walk(item.items||[])])
const work=navigation.sidebar['/schild2/'][0].items
const topic=link=>walk(work).find(item=>item.link===link)

test('Filter I und seine Beispiele stehen gemeinsam nach dem einfachen Filter',()=>{
 const selection=topic('/schild2/auswahl')
 const group=selection.items.find(item=>item.text==='Filter I')
 assert.deepEqual(group.items.map(item=>item.link),[
  '/schild2/auswahl/filter-i','/schild2/auswahl/benutzung-von-filter-i-001'
 ])
 const links=walk(selection.items).filter(item=>item.link).map(item=>item.link)
 assert(links.indexOf('/schild2/auswahl/attributsfilter')<links.indexOf('/schild2/auswahl/filter-i'))
 assert(links.indexOf('/schild2/auswahl/benutzung-von-filter-i-001')<links.indexOf('/schild2/auswahl/filter-ii'))
})

test('Die Arbeitsrubrik enthält überschaubare Untermenüs ohne verlorene Fachartikel',()=>{
 for(const item of walk(work.slice(2))) {
  if(item.items)assert(item.items.length<=10,`${item.text}: ${item.items.length} direkte Unterpunkte`)
 }
 for(const [link,count] of [['/schild2/unterricht-kataloge',45],['/schild2/gruppenprozesse',44]]) {
  const menu=topic(link)
  assert(menu.items.length<=8,'Lange Artikellisten müssen in Aufgabenbereiche gegliedert sein')
  assert.equal(walk(menu.items).filter(item=>item.link).length,count)
 }
})

test('Abitur und Grundschulzeugnisse führen von Vorbereitung zu Berechnung und Ausgabe',()=>{
 const abitur=walk(topic('/zeugnisse/sekundarstufen').items).filter(item=>item.link).map(item=>item.link.split('/').at(-1))
 const steps=['leistungsdaten-holen','kurse-algorithmisch-markieren','abitur-zulassung-berechnen','pruefungsergebnisse-eingeben','gesamtergebnis-berechnen','abitur-jahr-setzen-fuer-statistik']
 for(let i=1;i<steps.length;i++)assert(abitur.indexOf(steps[i-1])<abitur.indexOf(steps[i]),steps[i])
 const primary=topic('/zeugnisse/grundschule').items.map(item=>item.link)
 assert(primary.indexOf('/zeugnisse/grundschule/textzeugnisse-zuordnen')<primary.indexOf('/zeugnisse/grundschule/textzeugnisse-drucken'))
})

test('Jeder RAP-Eintrag erklärt seinen Zweck auch ohne Lesen der Signatur',()=>{
 for(const file of fs.readdirSync('reporting/rap').filter(file=>file.endsWith('.md'))) {
  const source=fs.readFileSync('reporting/rap/'+file,'utf8').replace(/\r\n/g,'\n')
  const description=source.split('## Beschreibung')[1]?.split(/\n## |\*\*Zurück/)[0].replace(/```[\s\S]*?```/g,'').trim()
  assert(description&&description.length>12,`Zweckerklärung fehlt: ${file}`)
 }
})
