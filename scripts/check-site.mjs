import { siteBase } from '../.vitepress/site-base.mjs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#(x[0-9a-f]+|[0-9]+));/gi, (all, number) => number ? String.fromCodePoint(parseInt(number.replace(/^x/i, ''), /^x/i.test(number) ? 16 : 10)) : ({'&amp;':'&','&quot;':'"','&apos;':"'",'&lt;':'<','&gt;':'>'}[all] || all))
export async function checkSite(root, sitePath = '/') {
  const pages = new Map()
  async function visit(dir) {
    for (const entry of await fs.readdir(dir, {withFileTypes:true})) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) await visit(file)
      else if (file.endsWith('.html')) pages.set(file, await fs.readFile(file, 'utf8'))
    }
  }
  root = path.resolve(root)
  await visit(root)
  if (!pages.size) throw new Error('Keine gebauten HTML-Seiten gefunden. Zuerst npm run docs:build ausführen.')
  const ids = new Map([...pages].map(([file, html]) => [file, new Set([...html.matchAll(/\bid=["']([^"']*)["']/g)].map(m => decode(m[1])))]))
  const errors = []
  for (const [file, html] of pages) {
    const base = 'https://docs.invalid' + sitePath + path.relative(root, file).split(path.sep).join('/')
    for (const match of html.matchAll(/<(a|img)\b[^>]*?\b(href|src)=["']([^"']*)["'][^>]*>/g)) {
      const [, tag, attribute, raw] = match
      if (tag === 'a' && attribute !== 'href' || tag === 'img' && attribute !== 'src') continue
      const href = decode(raw)
      if (!href || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue
      try {
        const url = new URL(href, base)
        if (!url.pathname.startsWith(sitePath)) throw new Error('Ziel außerhalb des Veröffentlichungspfads')
        let target = path.resolve(root, './' + decodeURIComponent(url.pathname.slice(sitePath.length)))
        if (target !== root && !target.startsWith(root + path.sep)) throw new Error('Ziel außerhalb der Website')
        if (url.pathname.endsWith('/')) target = path.join(target, 'index.html')
        else if (!path.extname(target)) target += '.html'
        try { await fs.access(target) } catch { throw new Error('Ziel fehlt') }
        const fragment = decodeURIComponent(url.hash.slice(1))
        if (tag === 'a' && fragment && fragment !== 'top' && pages.has(target) && !ids.get(target).has(fragment)) throw new Error('Sprungmarke fehlt')
      } catch (error) { errors.push(`${path.relative(root,file)}: ${href} – ${error.message}`) }
    }
  }
  return {pages:pages.size, errors:[...new Set(errors)]}
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const result = await checkSite(process.argv[2] || '.vitepress/dist', siteBase)
  for (const error of result.errors) console.error(error)
  console.log(`${result.pages} Seiten geprüft; ${result.errors.length} fehlerhafte interne Links oder Bilder.`)
  if (result.errors.length) process.exitCode = 1
}
