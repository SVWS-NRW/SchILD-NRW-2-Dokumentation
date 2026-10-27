import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { writeArticleRedirects } from '../.vitepress/site-data.mjs'
const read = file => JSON.parse(fs.readFileSync(file,'utf8'))
test('Tool-Menüs sind kurz, eindeutig und folgen dem Handbuchablauf',()=>{
  const groups=read('.vitepress/navigation.json').sidebar['/tools/'][0].items
  const lupo=groups.find(g=>g.link==='/tools/lupo')
  assert.deepEqual(lupo.items.slice(0,8).map(g=>g.text),['Einleitung','Installation','Vorbereitungen in SchILD','Erste Schritte','Beratungsprozess','Fachwahlen auswerten','Fachwahlen an Kurs42 übergeben','Weitere Laufbahnprüfungen'])
  assert.equal(lupo.items[3].items[0].text,'Schülerdateien erzeugen')
  assert.equal(groups.filter(g=>g.link==='/tools/anleitungen').length,1)
  for (const group of groups) {
    const seen=new Set()
    function visit(node) {
      for (const item of node.items||[]) {
        assert(!/^(?:Statistik mit ASDPC|Lupo:|S1PLAN:|Prognos:|KM2(?: |-|$)|Kurs42:)/i.test(item.text),item.text)
        assert(!seen.has(item.link),`Doppelter Menüeintrag: ${item.link}`)
        seen.add(item.link);visit(item)
      }
    }
    visit(group)
  }
})
test('PDFs sind in Artikel ausgewertet und zusätzliche Downloads entfernt',()=>{
  assert.deepEqual(read('migration/manuals/assets.json'),[])
  const evaluated=read('migration/manuals/evaluated-pdfs.json')
  assert.equal(evaluated.length,9)
  for (const pdf of evaluated) for (const article of pdf.articles) {
    assert(fs.readFileSync(article,'utf8').includes(pdf.source),`Quellenbeleg fehlt: ${article}`)
  }
  const directory='public/dateien/handbuecher'
  assert(!fs.existsSync(directory)||fs.readdirSync(directory).length===0)
  assert(!fs.existsSync('quellen/fehlende-downloads.md'))
  for (const retirement of read('migration/retired-articles.json')) assert(!fs.existsSync(retirement.path))
})
test('Entfernte Leerseiten führen auf statischem Hosting zu den richtigen Artikeln',()=>{
  const outDir=fs.mkdtempSync(path.join(os.tmpdir(),'schild2-redirects-'))
  writeArticleRedirects({outDir,site:{base:'/doku/'}})
  const html=fs.readFileSync(path.join(outDir,'schild2/import-export-statistik/statistik-mit-asdpc-uebersicht-1346.html'),'utf8')
  assert(html.includes('/doku/schild2/import-export-statistik/statistik-mit-asdpc-uebersicht.html'))
  assert(html.includes('noindex'))
  assert(!html.includes('undefined'))
})
