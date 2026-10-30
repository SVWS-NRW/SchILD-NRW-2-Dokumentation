import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { articlePath, contextualSidebar } from '../.vitepress/section-navigation.mjs'
import { createMarkdownRenderer } from 'vitepress'
import { createSidebar } from '../.vitepress/sidebar.mjs'
import { printNavigation } from '../.vitepress/section-print-loader.mjs'
import { sectionPrintEntries } from '../.vitepress/section-print.mjs'
const navigation=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const walk=items=>items.flatMap(item=>[item,...walk(item.items||[])])
const files=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(dir+'/'+e.name):[dir+'/'+e.name])

test('Jeder veröffentlichte Artikel ist ausdrücklich einem Themenmenü zugeordnet',()=>{
 const entries=new Set(Object.values(navigation.sidebar).flatMap(groups=>walk(groups)).filter(n=>n.link).map(n=>articlePath(n.link)))
 for(const dir of ['einstieg','schild2','zeugnisse','reporting','tools','administration','hilfe','programmreferenz','bilder']) {
  for(const file of files(dir).filter(f=>f.endsWith('.md'))) {
   const route='/'+file.replace(/\/index\.md$/,'/').replace(/\.md$/,'')
   assert(entries.has(articlePath(route)),`Artikel ohne Menü: ${file}`)
  }
 }
})

test('Alle Rubriken und Toolmenüs behalten jeden Seitenmenülink im eigenen Kontext',()=>{
 const sidebar=createSidebar(navigation),sections=Object.keys(navigation.sidebar)
 for(const section of sections) {
  for(const target of walk(navigation.sidebar[section]).filter(n=>n.link)) {
   const menu=contextualSidebar(sidebar[section],section,target.link)
   for(const entry of walk(menu[0].items).filter(n=>n.link)) {
    const url=new URL(entry.link,'https://docs.invalid')
    const expected=section
    assert.equal(url.searchParams.get('rubrik'),expected.slice(1,-1),`${section}: ${entry.link}`)
   }
  }
 }
})

test('Einzelne Archivseiten entfallen, das Quelltext-ZIP bleibt und der Wiki-Vergleich hat zwei Spalten',()=>{
 assert(!fs.existsSync('quellen'))
 assert.deepEqual(fs.readdirSync('public/dateien/quellen'),['wiki-quelltexte.zip'])
 const comparison=fs.readFileSync('hilfe/artikel-wiki-zuordnung.md','utf8')
 for(const row of comparison.split('\n').filter(s=>s.startsWith('| '))) assert.equal(row.split('|').length,4,row)
 for(const dir of ['einstieg','schild2','zeugnisse','reporting','tools','administration','hilfe','programmreferenz','bilder']) {
  for(const file of files(dir).filter(f=>f.endsWith('.md'))) assert(!/\]\(\/(?:quellen\/|dateien\/quellen\/(?!wiki-quelltexte\.zip\)))/.test(fs.readFileSync(file,'utf8')),file)
 }
})


test('Die Tooltabelle enthält alle Programme in einer zusammenhängenden Tabelle',async()=>{
 const md=await createMarkdownRenderer(process.cwd())
 const html=md.render(fs.readFileSync('tools/index.md','utf8'))
 assert.equal((html.match(/<table\b/g)||[]).length,1)
 const programs=navigation.sidebar['/tools/'][0].items.filter(n=>n.items)
 assert.equal((html.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g)||[]).length,programs.length)
})

test('Der gemeinsame Toolsdruck enthält die vollständigen Einzelanleitungen genau einmal',()=>{
 const print=printNavigation()
 const combined=sectionPrintEntries(print,'/tools/')
 const keys=new Set(combined.map(entry=>entry.key))
 assert.equal(keys.size,combined.length)
 for(const section of Object.keys(print.sidebar).filter(s=>s.startsWith('/tools/')&&s!=='/tools/')) {
  for(const entry of sectionPrintEntries(print,section)) {
   assert(keys.has(entry.key),`Im Toolsbuch fehlt ${entry.key}`)
   assert(fs.existsSync(entry.path),`Druckquelle fehlt: ${entry.path}`)
  }
 }
})


test('Tools ist ein normaler Hauptlink mit alphabetischen Themenzweigen ohne doppelte Übersicht',()=>{
 assert.deepEqual(navigation.nav.find(n=>n.text==='Tools'),{text:'Tools',link:'/tools/'})
 assert.equal(navigation.sidebar['/reporting/'][0].text,'Reporting')
 const tools=navigation.sidebar['/tools/'][0].items.filter(n=>n.items)
 const labels=tools.map(n=>n.text),collator=new Intl.Collator('de',{sensitivity:'base'})
 assert.deepEqual(labels,[...labels].sort(collator.compare))
 assert.equal(tools.length,20)
 for(const tool of tools)assert(!walk(tool.items).some(n=>n.text==='Übersicht'),tool.text)
 assert.deepEqual(Object.keys(navigation.sidebar),['/schild2/','/programmreferenz/','/reporting/','/tools/','/hilfe/'])
})
