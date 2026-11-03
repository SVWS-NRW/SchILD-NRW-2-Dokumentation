import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createMarkdownRenderer } from 'vitepress'
import { configureMarkdown } from '../.vitepress/markdown.mjs'

test('Feldtabellen haben sechs Spalten und einen beschrifteten, fokussierbaren Scrollbereich',async()=>{
  const md=await createMarkdownRenderer(process.cwd(),{config:configureMarkdown})
  const source=fs.readFileSync('schild2/import-export-statistik/schnittstellenbeschreibung.md','utf8')
  const tokens=md.parse(source,{})
  let fieldTables=0
  for (let i=0;i<tokens.length;i++) {
    if(tokens[i].type!=='table_open'||!tokens[i].meta?.fieldTable)continue
    fieldTables++
    for(let j=i+1;tokens[j]&&tokens[j].type!=='table_close';j++) {
      if(tokens[j].type!=='tr_open')continue
      let count=0
      for(let k=j+1;tokens[k].type!=='tr_close';k++)if(['td_open','th_open'].includes(tokens[k].type))count++
      assert.equal(count,6)
    }
  }
  assert(fieldTables>20)
  const html=md.render('## Daten\n\n| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |\n| --- | --- | --- | --- | --- | --- |\n| 1 | Name | Name | Text | Nein | Pflichtfeld |')
  assert(html.includes('tabindex="0" role="region" aria-label="Feldbeschreibung: Daten"'))
  assert(html.includes('<table class="interface-fields"'))
  assert(!/<table[^>]*class="[^"]*"[^>]*class=/.test(html))
})

test('Wiederhergestellter RAP-Code bewahrt Leerstrings, Pfade und Vergleichsoperatoren',()=>{
  const example=fs.readFileSync('reporting/rap/zeugnisparameter.md','utf8')
  assert(example.includes("If Sprechtag2 <>'' then Text:=Text + ' und am ' + Sprechtag2;"))
  assert(!example.includes('\\<\\>'))
  assert(fs.readFileSync('reporting/rap/bestaetigung.md','utf8').includes("lFilename <> ''"))
  assert(fs.readFileSync('reporting/rap/anrede.md','utf8').includes("Anrede('Herr','','Meier'"))
})
