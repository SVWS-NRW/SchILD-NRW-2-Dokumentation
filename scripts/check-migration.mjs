import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)))
const read = p => fs.readFileSync(path.join(root, p), 'utf8')
const json = p => JSON.parse(read(p))
const hash = data => crypto.createHash('sha256').update(data).digest('hex')
export function checkMigration() {
  const inventory = json('migration/snapshot/inventory.json')
  const articles = json('migration/articles.json')
  const assets = json('migration/assets.json')
  const navigation = json('.vitepress/navigation.json')
  const retired = new Map(json('migration/retired-articles.json').map(a=>[a.pageid,a]))
  const errors = []
  const routes = new Set()
  function visit(node) {
    if (node.link) routes.add(node.link.split(/[?#]/)[0].replace(/\.html$/, ''))
    for (const child of node.items || []) visit(child)
  }
  for (const groups of Object.values(navigation.sidebar)) for (const group of groups) visit(group)
  if (inventory.length !== articles.length) errors.push('Inventar und Artikelanzahl unterscheiden sich')
  if (new Set(articles.map(p => p.path)).size !== articles.length) errors.push('Doppelte Artikeladressen')
  for (const article of articles) {
    const snapshot = json(`migration/snapshot/${article.pageid}.json`)
    if (hash(snapshot.wikitext['*']) !== article.source_sha256) errors.push(`Originalquelle verändert: ${article.title}`)
    if (!inventory.some(p => p.pageid === article.pageid && p.title === article.title)) errors.push(`Artikel fehlt im Inventar: ${article.title}`)
    if (snapshot.revid !== article.revision) errors.push(`Falsche Quellversion: ${article.title}`)
    if (retired.has(article.pageid)) {
      const retirement=retired.get(article.pageid)
      if (fs.existsSync(path.join(root,article.path))) errors.push(`Leerartikel weiterhin vorhanden: ${article.title}`)
      const target=retirement.replacement.split('#')[0].replace(/\/$/,'/index')+'.md'
      if (!retirement.reason || !fs.existsSync(path.join(root,target))) errors.push(`Ersatz für Leerartikel fehlt: ${article.title}`)
      continue
    }
    const markdown = read(article.path)
    if (!markdown.includes(`wiki_revision: ${article.revision}`)) errors.push(`Quellennachweis fehlt: ${article.title}`)
    if (!routes.has('/' + article.path.replace(/\.md$/, ''))) errors.push(`Nicht im Themenmenü: ${article.title}`)
    if (/MIGRATION(?:BOX|ANCHOR)\d+END/.test(markdown)) errors.push(`Konvertierungsmarker: ${article.title}`)
    const anchors = [...snapshot.text['*'].matchAll(/class="mw-headline" id="([^"]+)"/g)].map(m => m[1])
    for (const id of anchors) if (!markdown.includes(`id="${id}"`)) errors.push(`Historische Sprungmarke fehlt: ${article.title} #${id}`)
  }
  for (const asset of assets) {
    const file = path.join(root, 'public', asset.path)
    if (!fs.existsSync(file) || hash(fs.readFileSync(file)) !== asset.sha256) errors.push(`Bild/Anhang fehlt oder verändert: ${asset.path}`)
  }
  for (const [file, expected] of Object.entries(json('migration/snapshot-sha256.json'))) {
    if (hash(read(`migration/snapshot/${file}`)) !== expected) errors.push(`Snapshot verändert: ${file}`)
  }
  if (json('migration/asset-errors.json').length) errors.push('Nicht gesicherte Bilder oder Anhänge')
  return { articles: articles.length, assets: assets.length, errors }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = checkMigration()
  for (const error of result.errors) console.error(error)
  console.log(`${result.articles} Artikel und ${result.assets} Dateien geprüft; ${result.errors.length} Fehler.`)
  if (result.errors.length) process.exitCode = 1
}
