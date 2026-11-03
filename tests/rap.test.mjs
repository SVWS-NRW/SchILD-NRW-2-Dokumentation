import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {createMarkdownRenderer} from 'vitepress'
import {configureMarkdown} from '../.vitepress/markdown.mjs'
const files=fs.readdirSync('reporting/rap').filter(name=>name.endsWith('.md'))
const read=name=>fs.readFileSync('reporting/rap/'+name,'utf8').replace(/\r\n/g,'\n')

test('RAP-Einstieg und Seitenmenü erschließen alle 122 Funktionen alphabetisch',()=>{
 assert.equal(files.length,122)
 const intro=fs.readFileSync('reporting/rap.md','utf8')
 const links=[...intro.matchAll(/^- \[([^\]]+)\]\((\/reporting\/rap\/[^)]+)\)/gm)]
 assert.equal(links.length,files.length)
 assert.equal(new Set(links.map(x=>x[2])).size,files.length)
 for(const name of files)assert(links.some(x=>x[2]==='/reporting/rap/'+name.slice(0,-3)),name)
 const ordered=links.map(x=>x[1].toLowerCase())
 assert.deepEqual(ordered,[...ordered].sort())
 const nav=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
 const visit=items=>items.flatMap(item=>[item,...visit(item.items||[])])
 const menu=visit(nav.sidebar['/reporting/']).find(n=>n.link==='/reporting/rap')
 assert.deepEqual(visit(menu.items).filter(n=>n.link).map(n=>n.link),links.map(x=>x[2]))
 const redirects=JSON.parse(fs.readFileSync('.vitepress/redirects.json','utf8'))
 assert.equal(redirects.find(n=>n.path==='reporting/rap/rap-funktionen.md').replacement,'/reporting/rap')
 for(const letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')assert(intro.includes(`id="${letter}"`))
})

test('Alle RAP-Artikel folgen der SchILD3-Gliederung und bewahren Quellen sowie Rückweg',async()=>{
 const md=await createMarkdownRenderer(process.cwd(),{config:configureMarkdown})
 let tables=0
 for(const file of files){
  const source=read(file)
  const body=source.replace(/^---\n[\s\S]*?\n---\n/,'')
  const tokens=md.parse(body,{})
  const headings=tokens.flatMap((t,i)=>t.type==='heading_open'&&t.tag==='h2'?[tokens[i+1].content]:[])
  const expected=['Beschreibung','Parameter','Rückgabewert','Beispiel'].filter(h=>headings.includes(h))
  assert.deepEqual(headings,expected,file)
  assert.equal(headings[0],'Beschreibung',file)
  assert.equal(headings.at(-1),'Beispiel',file)
  assert(source.includes('**Zurück zu [RAP-Funktionen](/reporting/rap)**'),file)
  assert(source.includes('Quelle: [') && source.includes('https://wiki.svws.nrw.de/'),file)
  if(headings.includes('Parameter')){
   const parameters=source.split('## Parameter')[1].split(/\n## /)[0]
   assert(!parameters.includes('```text'),file)
   if(!['datenliste.md','textbreite.md'].includes(file)){
    assert(parameters.includes('| Parameter | Bedeutung |'),file);tables++
   }
  }
 }
 assert.equal(tables,102)
 const html=md.render(read('aufzaehlungrtf.md'))
 assert(html.includes('&lt;ul&gt;..&lt;/ul&gt;'),'RTF-Marken müssen als Text in der Tabelle bleiben')
 assert(!html.includes('<ul>..</ul>'))
 assert(read('anrede.md').includes('<a id="signatur"></a>'))
 assert(read('anrede.md').includes('Ergebnis: Sehr geehrter Herr Meier'))
 for(const snippet of ["CreateNotenHeader('D,E,M,F,L');","CreateNotenHeader( 'D,M,E*' );","CreateNotenHeader( 'D,M,E#' );"])
  assert(read('createnotenheader.md').includes(snippet))
})
