import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?walk(path.join(dir,item.name)):item.name.endsWith('.md')?[path.join(dir,item.name)]:[])
const visit=items=>items.flatMap(item=>[item,...visit(item.items||[])])
test('Menütitel sind ohne Klammerzusätze und unverarbeitete Wiki-Bezeichnungen',()=>{
 const nav=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
 const reference=JSON.parse(fs.readFileSync('.vitepress/program-reference.json','utf8'))
 const nodes=[...visit(nav.nav),...Object.values(nav.sidebar).flatMap(visit),...visit(reference.tabs)]
 for(const node of nodes)if(node.text) {
  assert(!/[()]/.test(node.text),node.text)
  assert(!/^(?:Lupo:|Prognos:|S1PLAN:|News:|Kategorie:)/i.test(node.text),node.text)
 }
})
test('Artikelüberschriften und Metadaten bleiben lesbar, die alten Beispieladressen erreichbar',()=>{
 for(const dir of ['einstieg','schild2','zeugnisse','reporting','administration','hilfe','tools','programmreferenz','bilder'])for(const file of walk(dir)) {
  const source=fs.readFileSync(file,'utf8')
  const title=source.match(/^# (.+)$/m)?.[1]
  if(title)assert(!/[()]/.test(title),`${file}: ${title}`)
  const metadata=source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if(metadata)assert(!/<a\b/.test(metadata[1]),`HTML gehört nicht in die Seitenmetadaten: ${file}`)
 }
 const overview=fs.readFileSync('einstieg/grundlagen/schild-nrw-index.md','utf8')
 assert(overview.includes('# Das Programm im Überblick'))
 assert(overview.includes('id="schild-nrw-index"'))
 const german=fs.readFileSync('schild2/schueler/deutschfoerderung-nach-bass-13-63-nr-3-stand-29-08-2024.md','utf8')
 assert(/^# Deutschförderung\r?$/m.test(german))
 assert(german.includes('BASS 13-63 Nr. 3'))
 assert(german.includes('id="deutschforderung-nach-bass-13-63-nr-3-stand-29-08-2024"'))
})
