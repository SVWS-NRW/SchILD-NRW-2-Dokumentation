import assert from 'node:assert/strict'

export async function checkSingleMenus(page, base) {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(base + '/administration/benutzer-einstellungen/benutzerverwaltung-plugin-dll.html?referenz=benutzer-plugin', { waitUntil: 'networkidle' })
    if (width === 390) await page.locator('.VPLocalNav .menu').click()
    const menu = page.locator('.program-reference-menu')
    const plugin = menu.getByRole('link', { name: 'Benutzerverwaltung als Plugin', exact: true })
    await plugin.waitFor({ state: 'visible' })
    assert.equal(await plugin.getAttribute('aria-current'), 'page')
    assert(await plugin.evaluate(el => el.parentElement.tagName === 'LI' && [...el.parentElement.parentElement.children].some(li => li.querySelector(':scope > a')?.textContent === 'Benutzer')), 'Plugin und Benutzer stehen auf derselben Ebene')
    assert.deepEqual(await menu.locator('details > ul').evaluateAll(lists => lists.filter(ul => ul.children.length === 1).map(ul => ul.parentElement.querySelector('summary')?.textContent)), [], 'Keine einzelne Unterposition in der Programmreferenz')
    await page.reload({ waitUntil: 'networkidle' })
    assert.equal(await plugin.getAttribute('aria-current'), 'page', 'Bisherige Referenzadresse bleibt aktiv')
  }
  console.log('Einzelne Menüunterpunkte: gesamte Referenzstruktur und Plugin-Direktlink auf Desktop/Mobil geprüft.')
}
