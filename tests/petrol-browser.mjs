import assert from 'node:assert/strict'
function rgb(value){return (value.match(/[\d.]+/g)||[]).slice(0,3).map(Number)}
function luminance(c){return c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0)}
function contrast(a,b){const x=luminance(rgb(a)),y=luminance(rgb(b));return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
export async function checkPetrolTheme(page,base){
 for(const dark of [false,true]){
  await page.goto(base+'/reporting/rap/anrede.html',{waitUntil:'networkidle'})
  await page.evaluate(dark=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('vitepress-theme-appearance',dark?'dark':'light')},dark)
  const colours=await page.evaluate(()=>({heading:getComputedStyle(document.querySelector('.vp-doc h1')).color,background:getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg').trim(),sidebar:getComputedStyle(document.querySelector('.VPSidebar')).backgroundColor,brand:getComputedStyle(document.documentElement).getPropertyValue('--vp-c-brand-1').trim(),active:!!document.querySelector('.VPSidebarItem.is-active > .item')}))
  assert.equal(colours.heading,dark?'rgb(128, 209, 204)':'rgb(20, 102, 107)')
  assert.equal(colours.sidebar,dark?'rgb(21, 39, 41)':'rgb(237, 245, 244)')
  const bg=await page.locator('body').evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg').trim())
  const resolvedBg=await page.evaluate(bg=>{const node=document.createElement('span');node.style.color=bg;document.body.append(node);const colour=getComputedStyle(node).color;node.remove();return colour},bg)
  assert(contrast(colours.heading,resolvedBg)>=4.5,'Petrol-Überschriften brauchen ausreichenden Kontrast')
  assert(contrast(colours.heading,colours.sidebar)>=4.5,'Aktive Menüeinträge brauchen ausreichenden Kontrast')
  assert(colours.active)
  await page.emulateMedia({media:'print'})
  const print=await page.locator('.vp-doc h1').evaluate(node=>getComputedStyle(node).color)
  assert.notEqual(print,colours.heading,'Petrol wird nicht in die Druckgestaltung übernommen')
  await page.emulateMedia({media:'screen'})
 }
 await page.emulateMedia({reducedMotion:'reduce'})
 await page.goto(base+'/',{waitUntil:'networkidle'})
 const card=page.locator('.schild-home .VPHomeFeatures a.VPFeature').first()
 await card.hover()
 assert.equal(await card.evaluate(node=>getComputedStyle(node).transform),'none','Reduzierte Bewegung wird respektiert')
 await page.emulateMedia({reducedMotion:'no-preference'})
 console.log('Petrol: Farben, Kontraste, aktive Menüs, Druck und reduzierte Bewegung geprüft.')
}
