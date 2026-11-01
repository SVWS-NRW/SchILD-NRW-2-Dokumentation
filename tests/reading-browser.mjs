import assert from 'node:assert/strict'

export async function checkReadingNavigation(page, base) {
  await page.setViewportSize({ width: 1440, height: 950 })
  await page.goto(base + '/einstieg/erste-schritte.html?rubrik=schild2', { waitUntil: 'networkidle' })
  const matches = '#VPSidebarNav a[href*="/schild2/lehrkraefte/lehrkraefte"]'
  assert.equal(await page.locator(matches).count(), 2)
  const hrefs = await page.locator(matches).evaluateAll(nodes => nodes.map(node => node.getAttribute('href')))
  assert.notEqual(hrefs[0], hrefs[1])
  const check = async href => {
    await page.waitForFunction(href => {
      const active = [...document.querySelectorAll('#VPSidebarNav .VPSidebarItem.is-active > .item > a')]
      return active.length === 1 && active[0].getAttribute('href') === href && active[0].getAttribute('aria-current') === 'page'
    }, href)
  }
  await page.locator(matches).first().click()
  await check(hrefs[0])
  await page.locator(matches).last().click()
  await check(hrefs[1])
  await page.reload({ waitUntil: 'networkidle' })
  await check(hrefs[1])
  await page.goBack({ waitUntil: 'networkidle' })
  await check(hrefs[0])

  await page.goto(base + '/einstieg/grundlagen/schild-nrw-index.html?rubrik=schild2', { waitUntil: 'networkidle' })
  assert.equal(await page.locator('.vp-doc h2 a:not(.header-anchor)').count(), 0)
  await page.locator('.vp-doc a[href*="/administration/datenbanken/datei"]').first().click()
  await page.waitForFunction(() => document.querySelector('.vp-doc h1')?.textContent.includes('Menü Datei'))
  assert(await page.locator('#VPSidebarNav').getByRole('link', { name: 'Datei-Menü', exact: true }).isVisible())
  assert((await page.locator('#VPSidebarNav a').first().getAttribute('href')).startsWith('/schild2/'))

  for (const [oldPath, target] of [
    ['/hilfe/ueber-diese-dokumentation.html', '/hilfe/quelltexte-und-originaldateien.html'],
    ['/hilfe/bedienung.html', '/einstieg/grundlagen.html'],
    ['/einstieg/grundlagen/inhaltsverzeichnis.html', '/programmreferenz/'],
    ['/einstieg/erste-schritte/schild-nrw-tutorials.html#Kurzanleitungen', '/schild2/']
  ]) {
    await page.goto(base + oldPath, { waitUntil: 'networkidle' })
    assert.equal(new URL(page.url()).pathname, target)
  }
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 950 })
    await page.goto(base + '/schild2/auswahl/schnellfilter.html?rubrik=schild2', { waitUntil: 'networkidle' })
    const image = page.locator('.vp-doc img').first()
    await image.scrollIntoViewIfNeeded()
    await image.evaluate(node => node.decode())
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2))
    await page.screenshot({ path: `test-results/status-und-schnellfilter-${width}.png` })
  }
  console.log('Leseführung: eindeutige Menüauswahl, Verlauf, Datei-Menü, entfernte Übersichten und Status-/Schnellfilter geprüft.')
}
