import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import { checkSectionMenus } from './section-browser.mjs'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = 'http://127.0.0.1:4192'
const server = spawn(process.execPath, ['node_modules/vitepress/bin/vitepress.js', 'preview', '--host', '127.0.0.1', '--port', '4192'], {stdio:'ignore'})
let browser
const errors = []
const results = []
try {
  let ready = false
  for (let i=0;i<100;i++) {
    try { if ((await fetch(base)).ok) {ready=true;break} } catch {}
    await new Promise(resolve=>setTimeout(resolve,100))
  }
  assert(ready, 'Vorschau startet nicht')
  browser = await chromium.launch({headless:true,...(process.env.QA_BROWSER ? {executablePath:process.env.QA_BROWSER} : {})})
  const page = await browser.newPage()
  page.on('pageerror', e=>errors.push(e.message))
  page.on('console', message=>{
    // Chromium may probe favicon.ico although the site does not declare one.
    if(new URL(message.location().url || base,base).pathname==='/favicon.ico')return
    if(message.type()==='error'||/hydration/i.test(message.text()))errors.push(message.text())
  })
  await page.route(/https?:\/\/(?:www\.)?(?:youtube(?:-nocookie)?\.com|player\.vimeo\.com)\//, route=>route.fulfill({contentType:'text/html',body:'<html lang="de"><body>Videovorschau für die Browserprüfung</body></html>'}))
  await fs.mkdir('test-results', {recursive:true})
  const paths = ['/', '/einstieg/', '/administration/installation/schild-nrw-installation.html', '/schild2/import-export-statistik/schnittstellenbeschreibung.html', '/reporting/rap/anrede.html', '/programmreferenz/', '/bilder/', '/hilfe/alle-artikel.html','/tools/','/tools/lupo.html','/tools/ma2lbv.html','/quellen/','/quellen/dateien.html','/tools/enm-notenmanager/leistungsdaten.html','/tools/notenmodul-grundschule/vorbereitung.html','/tools/ma2lbv/abrechnung.html']
  for (const width of [1440,390]) for (const dark of [false,true]) {
    await page.setViewportSize({width,height:900})
    for (const route of paths) {
      const response=await page.goto(base+route,{waitUntil:'networkidle'})
      assert(response.ok(),route)
      await page.evaluate(dark=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('vitepress-theme-appearance',dark?'dark':'light')},dark)
      const overflow=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}))
      assert(overflow.scroll<=overflow.viewport+2, `${route} bei ${width}px: Überlauf ${JSON.stringify(overflow)}`)
      const broken=await page.locator('.vp-doc img').evaluateAll(imgs=>imgs.filter(img=>img.loading!=='lazy'&&(!img.complete||!img.naturalWidth)).map(img=>img.src))
      assert.deepEqual(broken,[],route)
      results.push({route,width,dark,overflow:false})
      if (route==='/' || route==='/programmreferenz/' || route.includes('schild-nrw-installation')) await page.screenshot({path:`test-results/${route==='/'?'start':route.includes('installation')?'installation':'referenz'}-${width}-${dark?'dark':'light'}.png`})
      if (route==='/tools/' || route==='/tools/lupo.html') await page.screenshot({path:`test-results/${route==='/tools/'?'tools':'lupo'}-${width}-${dark?'dark':'light'}.png`})
    }
  }
  await page.setViewportSize({width:1440,height:900})
  await checkSectionMenus(page,base)
  await page.goto(base+'/schild2/import-export-statistik/schnittstellenbeschreibung.html',{waitUntil:'networkidle'})
  assert(await page.locator('.interface-fields').count()>20,'Feldtabellen müssen ihre tatsächliche Layoutklasse erhalten')
  await page.locator('.interface-table-scroll').first().focus()
  assert(await page.locator('.interface-table-scroll').first().evaluate(node=>node===document.activeElement),'Tabellenbereich muss mit Tastatur fokussierbar sein')
  await page.goto(base+'/programmreferenz/',{waitUntil:'networkidle'})
  await page.locator('.program-reference-menu').getByRole('link',{name:'Schulverwaltung',exact:true}).click()
  await page.waitForURL('**/*?referenz=*')
  assert(await page.locator('.program-reference-menu .reference-active').count())
  await page.reload({waitUntil:'networkidle'})
  assert(await page.locator('.program-reference-menu .reference-active').count())
  await page.goto(base+'/reporting/rap/anrede.html',{waitUntil:'networkidle'})
  assert((await page.locator('.vp-doc').innerText()).includes("Anrede('Herr','','Meier'"), 'Leere Pascal-Zeichenkette wurde verändert')
  await page.goto(base+'/tools/lupo.html',{waitUntil:'networkidle'})
  assert(await page.locator('.vp-doc a[href*="lupo-einleitung"]').count()>0,'LuPO-Einstieg fehlt')
  assert.equal(await page.locator('a[href^="/dateien/handbuecher/"]').count(),0,'Zusätzliche Downloads sind noch verlinkt')
  await page.goto(base+'/hilfe/zusatzprogramme/lupo-lupo.html',{waitUntil:'networkidle'})
  await page.waitForURL('**/tools/lupo.html')
  assert(await page.locator('.VPNavBarMenu').getByRole('link',{name:'Tools',exact:true}).evaluate(e=>e.classList.contains('active')),'Alte LuPO-Adresse muss Tools im Kopfmenü aktivieren')
  await page.goto(base+'/schild2/import-export-statistik/statistik-mit-asdpc-uebersicht-1346.html',{waitUntil:'networkidle'})
  await page.waitForURL('**/statistik-mit-asdpc-uebersicht.html')
  await page.goto(base+'/hilfe/zusatzprogramme/prognos-analyseverfahren-klasse.html',{waitUntil:'networkidle'})
  assert((await page.locator('#VPSidebarNav').innerText()).includes('PM2'),'Verschachtelte Klassenanalyse muss das Tool-Menü behalten')
  await page.goto(base+'/bilder/',{waitUntil:'networkidle'})
  await page.getByRole('searchbox').fill('hauptfenster')
  assert(await page.locator('.image-catalog img').count()>0,'Bilderkatalog findet kein Hauptfenster')
  const download=await page.request.get(base+'/dateien/wiki/ka17-zeugnis-kopf-128afae2.pdf')
  assert(download.ok(),'Original-PDF muss lokal abrufbar bleiben')
  assert((await download.body()).subarray(0,5).toString()==='%PDF-','Dateiziel darf nicht versehentlich eine HTML-Seite liefern')
  assert((await page.locator('#VPSidebarNav').innerText()).includes('Artikel schreiben'))
  await page.goto(base+'/hilfe/alle-artikel.html',{waitUntil:'networkidle'})
  await page.locator('.article-index a').filter({hasText:'Anrede'}).first().click()
  await page.waitForURL('**/*?artikel=az')
  await page.reload({waitUntil:'networkidle'})
  assert((await page.locator('#VPSidebarNav').innerText()).includes('Alle Artikel A–Z'))
  assert((await page.locator('.VPDocFooter a.next').getAttribute('href')).includes('artikel=az'))
  await page.goto(base+'/einstieg/',{waitUntil:'networkidle'})
  await page.locator('.DocSearch-Button').click()
  await page.locator('#localsearch-input').fill('Datensicherung')
  await page.waitForSelector('.VPLocalSearchBox .result')
  assert(await page.locator('.VPLocalSearchBox').getByText('Datensicherung',{exact:false}).count()>0)
  await page.keyboard.press('Escape')
  await page.setViewportSize({width:390,height:900})
  await page.goto(base+'/einstieg/',{waitUntil:'networkidle'})
  await page.locator('.VPLocalNav .menu').click()
  await page.locator('.VPSidebar.open').waitFor()
  await page.locator('#VPSidebarNav').getByRole('link',{name:'Grundlagen und Orientierung',exact:true}).click()
  await page.waitForURL(url=>url.pathname==='/einstieg/grundlagen.html'&&url.searchParams.get('rubrik')==='einstieg')
  await page.locator('.VPSidebar.open').waitFor({state:'detached'})
  await page.goto(base+'/druck/einstieg.html',{waitUntil:'networkidle'})
  assert(await page.locator('.book-article').count()>5,'Rubrikdruck enthält keine Artikel')
  assert(await page.locator('.book-toolbar button').isVisible(),'Rubrikdruck braucht einen ausdrücklichen Druckstart')
  await page.emulateMedia({media:'print'})
  assert(await page.locator('.book-article').first().isVisible())
  await page.emulateMedia({media:'screen'})
  await page.goto(base+'/hilfe/markdown-und-gestaltung.html',{waitUntil:'networkidle'})
  const lifecycle=await page.evaluate(()=>{
    const details=[...document.querySelectorAll('.vp-doc details')]
    const initial=details.map(node=>node.open)
    window.dispatchEvent(new Event('beforeprint'))
    const opened=details.every(node=>node.open)
    const source=!!document.querySelector('.print-source')
    window.dispatchEvent(new Event('afterprint'))
    return {count:details.length,opened,source,restored:details.every((node,i)=>node.open===initial[i]),clean:!document.querySelector('.print-source')}
  })
  assert(lifecycle.count>0&&lifecycle.opened&&lifecycle.source&&lifecycle.restored&&lifecycle.clean,'Druck muss Details öffnen und anschließend den Lesezustand wiederherstellen')
  assert.deepEqual(errors,[])
  await fs.writeFile('test-results/browser-check.json',JSON.stringify({checks:results,reference:true,search:true,catalog:true,mobileMenu:true,pascalStrings:true,sectionPrint:true,errors},null,2)+'\n')
  console.log(`${results.length} Ansichten sowie Suche, Bilderkatalog, Referenzmenü, Mobilmenü, Pascal-Beispiele und Rubrikdruck geprüft.`)
} finally {
  await browser?.close()
  server.kill()
}
