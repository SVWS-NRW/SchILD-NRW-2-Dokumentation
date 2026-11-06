import assert from 'node:assert/strict'

export async function checkArticleMenus(page, base) {
  for(const width of [1440,390]) {
    await page.setViewportSize({width,height:900})
    await page.goto(base+'/schild2/import-export-statistik/statistik-amtliche-schuldaten.html?referenz=menue-27',{waitUntil:'networkidle'})
    const menu=page.locator('.program-reference-menu')
    const article=menu.getByRole('link',{name:'Statistik und amtliche Schuldaten',exact:true})
    if(width===390)await page.locator('.VPLocalNav .menu').click()
    await article.waitFor({state:'visible'})
    assert.equal(await article.getAttribute('aria-current'),'page')
    assert.equal(await menu.locator('a[href*="statistik-amtliche-schuldaten"]').count(),1)
    assert.equal(await menu.locator('a[href*="#"]').count(),0,'Keine Abschnittslinks im Referenzmenü')
    assert(await article.evaluate(a=>a.parentElement.tagName==='LI'),'Statistikartikel hat kein eigenes Untermenü')
    await page.goto(base+'/schild2/import-export-statistik/statistik-amtliche-schuldaten.html?referenz=statistik-sim#schulerdaten-sim',{waitUntil:'networkidle'})
    await page.waitForFunction(()=>document.querySelector('.program-reference-menu [aria-current=page]')?.textContent==='Statistik und amtliche Schuldaten')
    assert.equal(await page.locator('[id="Schülerdaten_(SIM)"]').count(),1,'Bisheriges Abschnittsziel bleibt erhalten')
    await page.reload({waitUntil:'networkidle'})
    assert.equal(await article.getAttribute('aria-current'),'page')
    await page.goto(base+'/tools/anonymisierungstool.html?rubrik=tools',{waitUntil:'networkidle'})
    assert.equal(await page.locator('#VPSidebarNav a[href*="anonymisierungstool"]').count(),1,'Einzelartikel-Tool ohne Abschnittsuntermenü')
  }
  console.log('Artikelmenüs: Statistik als einzelner Eintrag, alte Abschnittslinks und Einzelartikel-Tools auf Desktop/Mobil geprüft.')
}
