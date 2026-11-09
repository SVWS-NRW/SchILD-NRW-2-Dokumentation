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
  await page.waitForFunction(() => [...document.querySelectorAll('#VPSidebarNav .item .text')]
    .find(node => node.textContent.trim() === 'Erste Schritte')?.closest('.VPSidebarItem').classList.contains('collapsed'))
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
    ['/einstieg/grundlagen/karteikasten.html#die-status-im-uberblick', '/schild2/auswahl/schnellfilter.html'],
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

export async function checkFilterBranches(page, base) {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 950 })
    await page.goto(base + '/schild2/?rubrik=schild2', { waitUntil: 'networkidle' })
    const openMobile = async () => {
      if (width < 960 && !await page.locator('.VPSidebar.open').count()) {
        await page.locator('.VPLocalNav .menu').click()
        await page.locator('.VPSidebar.open').waitFor()
      }
    }
    await openMobile()
    const menu = page.locator('#VPSidebarNav')
    const group = name => menu.getByText(name, { exact: true }).first().locator('xpath=ancestor::*[contains(concat(" ", normalize-space(@class), " "), " VPSidebarItem ")][1]')
    const collapsed = async (name, expected) => {
      await page.waitForFunction(({ name, expected }) => {
        const label = [...document.querySelectorAll('#VPSidebarNav .item .text')].find(node => node.textContent.trim() === name)
        return label?.closest('.VPSidebarItem').classList.contains('collapsed') === expected
      }, { name, expected })
    }
    await menu.getByRole('link', { name: 'Grundlagen und Orientierung', exact: true }).click()
    await page.waitForFunction(() => document.querySelector('.vp-doc h1')?.textContent.includes('Grundlagen und Orientierung'))
    await openMobile()
    const entries = menu.locator('a[href*="/schild2/auswahl/schnellfilter"]')
    assert.equal(await entries.count(), 2, 'Je ein gemeinsamer Filterartikel pro Themenzweig')
    const hrefs = await entries.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')))
    await entries.first().click()
    await page.waitForFunction(() => document.querySelector('.vp-doc h1')?.textContent.includes('Status- und Schnellfilter'))
    await openMobile()
    await collapsed('Grundlagen und Orientierung', false)
    await collapsed('Auswählen und filtern', true)
    await collapsed('Auswahl und Reihenfolge', true)
    await page.screenshot({ path: `test-results/filterzweig-grundlagen-${width}.png` })
    // An unrelated branch must remain manually openable and closable while
    // its duplicate article is active in a different branch.
    await group('Auswählen und filtern').locator(':scope > .item .caret').click()
    await collapsed('Auswählen und filtern', false)
    await group('Auswählen und filtern').locator(':scope > .item .caret').click()
    await collapsed('Auswählen und filtern', true)
    await page.reload({ waitUntil: 'networkidle' })
    await openMobile()
    await collapsed('Auswählen und filtern', true)
    await group('Auswählen und filtern').locator(':scope > .item .caret').click()
    await group('Auswahl und Reihenfolge').locator(':scope > .item .caret').click()
    await entries.last().click()
    await page.waitForURL(url => url.searchParams.get('menue') === new URL(hrefs[1], base).searchParams.get('menue'))
    await openMobile()
    await collapsed('Grundlagen und Orientierung', true)
    await collapsed('Auswählen und filtern', false)
    await collapsed('Auswahl und Reihenfolge', false)
    await page.screenshot({ path: `test-results/filterzweig-auswahl-${width}.png` })
    await page.reload({ waitUntil: 'networkidle' })
    await openMobile()
    await collapsed('Grundlagen und Orientierung', true)
    await page.goBack({ waitUntil: 'networkidle' })
    await openMobile()
    await collapsed('Auswählen und filtern', true)
    assert.equal(await menu.locator('a[aria-current="page"]').count(), 1)
  }
  console.log('Menüzweige: mehrfach verlinkte Filterartikel öffnen nur ihren eigenen Zweig; manuelle Bedienung, Neuladen und Verlauf bei Desktop/Mobil geprüft.')
}
