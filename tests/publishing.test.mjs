import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import {normalizeSiteBase} from '../.vitepress/site-base.mjs'
import {checkSite} from '../scripts/check-site.mjs'

test('Domainwurzel und GitHub-Pages-Unterpfad werden eindeutig normalisiert',()=>{
 assert.equal(normalizeSiteBase('/'),'/')
 assert.equal(normalizeSiteBase('/SchILD-NRW-2-Dokumentation'),'/SchILD-NRW-2-Dokumentation/')
 for(const value of ['https://example.org/','//example.org/','/../outside/','/docs?x=1','/docs#x'])assert.throws(()=>normalizeSiteBase(value))
})

test('Linkprüfung berücksichtigt den Veröffentlichungspfad und erkennt entkommende Links',async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'schild2-publishing-'))
 try {
  await fs.mkdir(path.join(root,'bilder'))
  await fs.writeFile(path.join(root,'bilder','bild.png'),'fixture')
  await fs.writeFile(path.join(root,'index.html'),'<a href="/SchILD-NRW-2-Dokumentation/artikel.html#ziel">Artikel</a><img src="/SchILD-NRW-2-Dokumentation/bilder/bild.png">')
  await fs.writeFile(path.join(root,'artikel.html'),'<h1 id="ziel">Artikel</h1><a href="/SchILD-NRW-2-Dokumentation/">Start</a>')
  assert.deepEqual((await checkSite(root,'/SchILD-NRW-2-Dokumentation/')).errors,[])
  await fs.appendFile(path.join(root,'index.html'),'<a href="/artikel.html">Falsche Domainwurzel</a>')
  const result=await checkSite(root,'/SchILD-NRW-2-Dokumentation/')
  assert.equal(result.errors.length,1)
  assert(result.errors[0].includes('außerhalb des Veröffentlichungspfads'))
 } finally {assert.equal(path.dirname(path.resolve(root)),path.resolve(os.tmpdir()));await fs.rm(root,{recursive:true,force:true})}
})

test('Nur master veröffentlicht, beide PR-Zielbranches werden vollständig geprüft',async()=>{
 for(const [file,job] of [['dokumentation.yml','docs-check'],['browser.yml','browser-check']]){
  const source=await fs.readFile('.github/workflows/'+file,'utf8')
  assert(source.includes('branches: [dev, master]'))
  assert(source.includes(job+':'))
  assert(!source.includes('paths:'),'Pflichtprüfungen dürfen nicht durch Pfadfilter übersprungen werden')
 }
 const source=await fs.readFile('.github/workflows/deploy.yml','utf8')
 assert(source.includes('branches: [master]'))
 assert(source.includes("if: github.ref == 'refs/heads/master'"))
 assert(source.includes('name: schild2-domain'))
 assert(!source.includes('schild3'))
})
