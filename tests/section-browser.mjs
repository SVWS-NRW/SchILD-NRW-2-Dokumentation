import assert from 'node:assert/strict'

export async function checkSectionMenus(page,base) {
 const prefix=new URL(base).pathname.replace(/\/$/,'')
 // A normal direct visit must not be claimed by the reference or a foreign topic.
 for(const [target,section]of [
  ['/einstieg/grundlagen/hauptfenster.html','einstieg'],
  ['/schild2/schueler/individual-daten-i.html','schild2'],
  ['/tools/notenmodul-grundschule/leistungsdaten.html','tools']
 ]) {
  await page.goto(base+target,{waitUntil:'networkidle'})
  assert.equal(await page.locator('#VPSidebarNav .group').first().getByRole('link',{name:'Übersicht',exact:true}).getAttribute('href'),prefix+'/'+section+'/','Direktaufruf braucht seine primäre Rubrik')
 }
 const cases=[
  {start:'/einstieg/grundlagen.html',target:'/einstieg/grundlagen/schild-nrw-index',section:'einstieg',label:'Einstieg',heading:'Das Programm im Überblick'},
  {start:'/schild2/schueler.html',target:'/schild2/schueler/deutschfoerderung-nach-bass-13-63-nr-3-stand-29-08-2024',section:'schild2',label:'SchILD2',heading:'Deutschförderung'},
  {start:'/zeugnisse/grundschule.html',target:'/tools/notenmodul-grundschule/leistungsdaten',section:'zeugnisse',label:'Zeugnisse',heading:'Noten und Kompetenzen eingeben'},
  {start:'/tools/notenmodul-grundschule.html',target:'/tools/notenmodul-grundschule/leistungsdaten',section:'tools',label:'Tools',heading:'Noten und Kompetenzen eingeben'},
  {start:'/administration/benutzer-einstellungen.html',target:'/administration/benutzer-einstellungen/benutzerverwaltung',section:'administration',label:'SchILD2',heading:'Benutzerrechte in KM2'},
  {start:'/reporting/verwaltung.html',target:'/reporting/verwaltung/mailversand-aus-der-reporting',section:'reporting',label:'Reporting',heading:'Reports per E-Mail versenden'}
 ]
 for(const scenario of cases) {
  await page.goto(base+scenario.start,{waitUntil:'networkidle'})
  const link=page.locator(`#VPSidebarNav a[href*="${scenario.target}"][href*="rubrik="]`).first()
  assert(await link.isVisible(),`Artikel muss im aufgeklappten Themenzweig sichtbar sein: ${scenario.target}`)
  await link.click()
  await page.waitForURL(url=>url.pathname===prefix+scenario.target+'.html'&&url.searchParams.get('rubrik')===scenario.section)
  await page.waitForFunction(heading=>document.querySelector('.vp-doc h1')?.innerText.replace(/\u200b/g,'').trim()===heading,scenario.heading)
  assert.equal((await page.locator('.vp-doc h1').first().innerText()).replace(/\u200b/g,'').trim(),scenario.heading)
  const check=async()=>{
   const overview=await page.locator('#VPSidebarNav .group').first().getByRole('link',{name:'Übersicht',exact:true}).getAttribute('href')
   assert.equal(overview,prefix+'/'+scenario.section+'/','Die Rubrik muss erhalten bleiben')
   const active=await page.locator('.VPNavBarMenu > .active').evaluateAll(nodes=>nodes.map(node=>(node.querySelector(':scope > .button .text')||node).textContent.trim()))
   assert.deepEqual(active,[scenario.label],'Das Hauptmenü muss denselben Lesekontext zeigen')
  }
  await check()
  await page.reload({waitUntil:'networkidle'})
  await check()
  const next=page.locator('.VPDocFooter a.next')
  if(await next.count()) {
   const href=await next.getAttribute('href')
   // Overview destinations intentionally need no parameter; article steps do.
   assert(new URL(href,base).searchParams.get('rubrik')===scenario.section||new URL(href,base).pathname===prefix+'/'+scenario.section+'/')
   await next.click();await page.waitForLoadState('networkidle');await check()
   await page.goBack({waitUntil:'networkidle'});await check()
  }
 }
 console.log('Rubrikkontext: sechs echte Menüwege mit Neuladen, Weiterblättern und Zurück geprüft.')
}
