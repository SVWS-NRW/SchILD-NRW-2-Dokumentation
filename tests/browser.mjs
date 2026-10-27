import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
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
  await fs.mkdir('test-results', {recursive:true})
  const paths = ['/', '/einstieg/', '/administration/installation/schild-nrw-installation.html', '/schild2/import-export-statistik/schnittstellenbeschreibung.html', '/reporting/rap/anrede.html', '/programmreferenz/', '/bilder/', '/hilfe/alle-artikel.html']
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
    }
  }
  await page.setViewportSize({width:1440,height:900})
  await page.goto(base+'/programmreferenz/',{waitUntil:'networkidle'})
  await page.locator('.program-reference-menu').getByRole('link',{name:'Schulverwaltung',exact:true}).click()
  await page.waitForURL('**/*?referenz=*')
  assert(await page.locator('.program-reference-menu .reference-active').count())
  await page.reload({waitUntil:'networkidle'})
  assert(await page.locator('.program-reference-menu .reference-active').count())
  await page.goto(base+'/reporting/rap/anrede.html',{waitUntil:'networkidle'})
  assert((await page.locator('.vp-doc').innerText()).includes("Anrede('Herr','','Meier'"), 'Leere Pascal-Zeichenkette wurde verändert')
  await page.goto(base+'/bilder/',{waitUntil:'networkidle'})
  await page.getByRole('searchbox').fill('hauptfenster')
  assert(await page.locator('.image-catalog img').count()>0,'Bilderkatalog findet kein Hauptfenster')
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
  await page.waitForURL('**/einstieg/grundlagen.html')
  await page.locator('.VPSidebar.open').waitFor({state:'detached'})
  await page.goto(base+'/druck/einstieg.html',{waitUntil:'networkidle'})
  assert(await page.locator('.book-article').count()>5,'Rubrikdruck enthält keine Artikel')
  await page.emulateMedia({media:'print'})
  assert(await page.locator('.book-article').first().isVisible())
  assert.deepEqual(errors,[])
  await fs.writeFile('migration/browser-check.json',JSON.stringify({checks:results,reference:true,search:true,catalog:true,mobileMenu:true,pascalStrings:true,sectionPrint:true,errors},null,2)+'\n')
  console.log(`${results.length} Ansichten sowie Suche, Bilderkatalog, Referenzmenü, Mobilmenü, Pascal-Beispiele und Rubrikdruck geprüft.`)
} finally {
  await browser?.close()
  server.kill()
}
