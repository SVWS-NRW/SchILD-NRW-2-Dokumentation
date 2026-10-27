import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
const read = p => JSON.parse(fs.readFileSync(p,'utf8'))
const hash = (data,kind='sha256') => crypto.createHash(kind).update(data).digest('hex')
export function checkComplete() {
  const errors=[]
  const inventory=read('migration/wiki-complete/inventory.json')
  const articles=read('migration/articles.json')
  const wikiFiles=read('migration/wiki-complete/assets.json')
  const manuals=read('migration/manuals/assets.json')
  for (const page of inventory) {
    const original=`migration/wiki-complete/pages/${page.pageid}.json`
    const published=`public/dateien/quellen/seite-${page.pageid}.json`
    if (!fs.existsSync(published) || !fs.readFileSync(original).equals(fs.readFileSync(published))) errors.push(`Originalquelle fehlt: ${page.title}`)
    if (!fs.existsSync(`quellen/wiki/seite-${page.pageid}.md`)) errors.push(`Lokale Quellenseite fehlt: ${page.title}`)
    if ([0,4,12,14,200].includes(page.ns) && !articles.some(a=>a.pageid===page.pageid)) errors.push(`Inhaltsseite nicht übertragen: ${page.title}`)
  }
  if (inventory.length!==new Set(inventory.map(p=>p.pageid)).size) errors.push('Doppelte Seiten im Gesamtinventar')
  if (wikiFiles.length!==read('migration/wiki-complete/files.json').length) errors.push('Unvollständige Wiki-Dateien')
  for (const file of [...wikiFiles,...manuals]) {
    const disk=path.join('public',file.path)
    if (!fs.existsSync(disk)) {errors.push(`Datei fehlt: ${file.path}`);continue}
    const bytes=fs.readFileSync(disk)
    if (hash(bytes)!==file.sha256) errors.push(`Datei verändert: ${file.path}`)
    if (file.sha1 && hash(bytes,'sha1')!==file.sha1) errors.push(`Original-Prüfsumme abweichend: ${file.path}`)
  }
  if (read('migration/wiki-complete/errors.json').length) errors.push('Wiki-Dateien nicht vollständig abgerufen')
  for (const [file,expected] of Object.entries(read('migration/wiki-complete/sha256.json'))) {
    if (hash(fs.readFileSync(path.join('migration/wiki-complete',file)))!==expected) errors.push(`Wiki-Archiv verändert: ${file}`)
  }
  for (const source of read('migration/manuals/sources.json')) {
    if (hash(fs.readFileSync(source.file))!==source.sha256) errors.push(`Offizielle Quellenseite verändert: ${source.url}`)
  }
  const nav=read('.vitepress/navigation.json')
  if (nav.nav.length!==6) errors.push('Kopfmenü muss sechs Zugänge enthalten')
  for (const key of ['kurs42','lupo','asdpc','notenmodul-grundschule','enm-notenmanager','externes-notenmodul','km2','pm2','s1plan','ma2lbv','migrationstool','anonymisierungstool','import-textdateien','schuljahr-erhoehen']) {
    if (!fs.existsSync(`tools/${key}.md`)) errors.push(`Tool fehlt: ${key}`)
  }
  if (!manuals.some(a=>a.source.endsWith('handbuch-schild-lupo-kurs42-22.auflage.pdf'))) errors.push('Gemeinsames Handbuch fehlt')
  return {pages:inventory.length,articles:articles.length,wikiFiles:wikiFiles.length,manuals:manuals.length,errors}
}
