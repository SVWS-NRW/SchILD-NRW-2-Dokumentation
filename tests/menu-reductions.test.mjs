import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { referenceActiveId } from '../.vitepress/reference-navigation.mjs'
const nav=JSON.parse(fs.readFileSync('.vitepress/navigation.json','utf8'))
const ref=JSON.parse(fs.readFileSync('.vitepress/program-reference.json','utf8'))
const walk=items=>items.flatMap(n=>[n,...walk(n.items||[])])
const reference=walk(ref.tabs),work=walk(nav.sidebar['/schild2/']),tools=walk(nav.sidebar['/tools/'])

test('Maßvoller Abbau entfernt doppelte Zugänge und erhält unterschiedliche Arbeitsabläufe',()=>{
 assert(!work.some(n=>n.text==='Weitere Wiki-Beschreibung'))
 for(const route of ['externe-blockungs-tools','kursplanung-kplan-exe','schildchat-exe','schildweb','sem-schnelleingabemodul']) {
  const path='/hilfe/zusatzprogramme/'+route
  assert.equal(tools.filter(n=>n.link===path).length,1,path)
 }
 for(const path of ['/schild2/lehrkraefte/lehrkraefte','/schild2/unterricht-kataloge/klassen-versetzungstabelle','/schild2/unterricht-kataloge/statistik-jahrgaenge','/schild2/unterricht-kataloge/unterrichtsfaecher','/schild2/auswahl/schnellfilter'])assert.equal(work.filter(n=>n.link===path).length,2,path)
 for(const suffix of ['leistungsdaten','rueckgabe-und-druck']) {
  const path='/tools/notenmodul-grundschule/'+suffix
  assert(work.some(n=>n.link===path)&&tools.some(n=>n.link===path),'Zeugnisarbeit und Tool: '+path)
 }
})

test('Referenz behält belegte Doppelzugänge, entfernt Ergänzungsdopplungen und falsche Zuordnungen',()=>{
 for(const [oldId,id] of [['menue-menue-68-1','abitur-1'],['menue-menue-68-2','abitur-2'],['menue-menue-68-3','abitur-3'],['menue-menue-68-5','abitur-5'],['menue-menue-68-6','abitur-6']]) {
  const article=reference.find(n=>n.id===id)
  assert.equal(reference.filter(n=>n.link===article.link).length,1)
  assert.equal(referenceActiveId(ref,oldId,article.link),id,'Bisheriger Referenzlink bleibt aktiv')
 }
 for(const path of ['/schild2/schueler/einwilligungen','/schild2/unterricht-kataloge/lernplattformen','/schild2/gruppenprozesse/faecher-in-leistungsdaten-neu-sortieren'])assert.equal(reference.filter(n=>n.link===path).length,2,path)
 assert(!reference.find(n=>n.id==='zeugnis-bemerkungen').link,'Keine Gruppenprozess-Anleitung beim einzelnen Schüler')
 assert.equal(reference.filter(n=>n.link==='/zeugnisse/vorbereitung/zeugnisbemerkungen-eintragen').length,1)
})
