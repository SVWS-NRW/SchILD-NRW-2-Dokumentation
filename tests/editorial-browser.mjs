import assert from 'node:assert/strict'

export async function checkEditorialNavigation(page,base) {
 const cases=[
  {overview:'/schild2/auswahl',target:'/schild2/auswahl/filter-i',group:'Filter I',next:'/schild2/auswahl/benutzung-von-filter-i-001'},
  {overview:'/schild2/unterricht-kataloge',target:'/schild2/unterricht-kataloge/statistik-jahrgaenge',group:'Jahrgänge und Klassen'},
  {overview:'/schild2/gruppenprozesse',target:'/schild2/gruppenprozesse/einzelne-faecher-bei-schuelern-hinzufuegen',group:'Fächer und Unterricht'},
  {overview:'/zeugnisse/vorbereitung',target:'/zeugnisse/vorbereitung/faecher-ohne-noten-suchen',group:'Daten prüfen und Druck vorbereiten'},
  {overview:'/zeugnisse/sekundarstufen',target:'/zeugnisse/sekundarstufen/leistungsdaten-holen',group:'Abitur vorbereiten'}
 ]
 for(const scenario of cases) {
  await page.goto(base+scenario.overview+'.html?rubrik=schild2',{waitUntil:'networkidle'})
  await page.locator('.vp-doc a[href*="'+scenario.target+'"]').first().click()
  await page.waitForURL(url=>url.pathname.endsWith(scenario.target+'.html')&&url.searchParams.get('rubrik')==='schild2')
  const check=async()=>{
   await page.waitForFunction(group=>[...document.querySelectorAll('#VPSidebarNav .item[role=button]')].some(el=>el.textContent.includes(group)&&!el.closest('.VPSidebarItem').classList.contains('collapsed')),scenario.group)
   const heading=page.locator('#VPSidebarNav .item[role="button"]').filter({hasText:scenario.group}).filter({visible:true}).first()
   await heading.waitFor({state:'visible'})
   assert(await heading.evaluate(el=>!el.closest('.VPSidebarItem').classList.contains('collapsed')),scenario.group)
   const overview=page.locator('#VPSidebarNav').getByRole('link',{name:'Übersicht',exact:true})
   assert.equal(new URL(await overview.getAttribute('href'),base).pathname,'/schild2/')
  }
  await check();await page.reload({waitUntil:'networkidle'});await check()
  if(scenario.next) {
   const next=page.locator('.VPDocFooter a.next')
   assert(new URL(await next.getAttribute('href'),base).pathname.endsWith(scenario.next+'.html'))
   await next.click();await page.waitForLoadState('networkidle');await check()
  }
 }
 await page.goto(base+'/reporting/rap/anrede.html?rubrik=reporting',{waitUntil:'networkidle'})
 assert(await page.locator('#VPSidebarNav').getByRole('link',{name:'Anrede',exact:true}).isVisible(),'RAP-Buchstabenbereich öffnet automatisch')
 assert((await page.locator('.vp-doc #beschreibung + p').innerText()).includes('Anrede'))
 await page.goto(base+'/einstieg/grundlagen/begriffe.html?rubrik=schild2',{waitUntil:'networkidle'})
 assert((await page.locator('.vp-doc').innerText()).includes('Gruppenprozess'))
 for(const [route,id] of [
  ['/einstieg/grundlagen.html','installation-vorbereiten'],
  ['/einstieg/grundlagen.html','im-programm-orientieren'],
  ['/tools/lupo/lupo-der-beratungsprozess.html','fehlende-sus-anschreiben']
 ]) {
  await page.goto(base+route+'#'+id,{waitUntil:'networkidle'})
  assert.equal(await page.locator('[id="'+id+'"]').count(),1,'Alter Überschriftenlink bleibt erhalten: '+id)
 }
 console.log('Lektorat: fünf neue Themenzweige, zusammenhängender Filter-I-Ablauf, RAP-Bereich und Begriffsübersicht geprüft.')
}
