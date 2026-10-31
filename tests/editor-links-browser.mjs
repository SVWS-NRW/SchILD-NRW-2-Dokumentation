import assert from 'node:assert/strict'

export async function checkEditorLinks(page, base) {
  for (const width of [1440, 390]) for (const dark of [false, true]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(base + '/schild2/auswahl.html?rubrik=schild2#auswahlen-und-filtern', { waitUntil: 'networkidle' })
    await page.evaluate(dark => document.documentElement.classList.toggle('dark', dark), dark)
    const controls = page.locator('.article-print-controls')
    await controls.waitFor()
    await page.waitForFunction(() => new Set([...document.querySelectorAll('.article-print-icon')].map(node => getComputedStyle(node).color)).size === 1)
    assert.equal(await controls.locator('.article-print-icon').evaluateAll(nodes => new Set(nodes.map(node => getComputedStyle(node).color)).size), 1, 'Alle drei Symbole haben dieselbe Farbe')
    assert.equal(await controls.locator('button').count(), 1)
    const links = controls.locator('a')
    assert.deepEqual(await links.evaluateAll(nodes => nodes.map(a => ({ href: a.href, target: a.target, rel: a.rel }))), [
      { href: 'https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/edit/dev/schild2/auswahl.md', target: '_blank', rel: 'noopener noreferrer' },
      { href: 'https://github.dev/SVWS-NRW/SchILD-NRW-2-Dokumentation/blob/dev/schild2/auswahl.md', target: '_blank', rel: 'noopener noreferrer' }
    ])
    await links.first().focus()
    await page.keyboard.press('Tab')
    assert(await links.last().evaluate(a => a === document.activeElement), 'Editorlinks müssen per Tastatur erreichbar sein')
    await page.evaluate(() => window.scrollTo(0, 0))
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), 'Kein horizontaler Überlauf')
    assert(await page.locator('.vp-doc h1').evaluate(h => {
      const range = document.createRange()
      range.selectNodeContents(h.firstChild)
      const text = range.getBoundingClientRect()
      const actions = h.querySelector('.article-print-controls').getBoundingClientRect()
      return text.right <= actions.left || text.top >= actions.bottom
    }), 'Titel und Schaltflächen dürfen sich nicht überlagern')
    await page.screenshot({ path: `test-results/editor-links-${width}-${dark ? 'dark' : 'light'}.png` })
    await page.emulateMedia({ media: 'print' })
    assert.equal(await controls.evaluate(node => getComputedStyle(node).display), 'none')
    assert.equal(await page.locator('.vp-doc h1').evaluate(node => getComputedStyle(node).paddingRight), '0px')
    assert.equal(await page.locator('.vp-doc h1').evaluate(node => getComputedStyle(node).paddingTop), '0px')
    await page.emulateMedia({ media: 'screen' })
  }
  for (const [route, source] of [
    ['/schild2/', 'schild2/index.md'],
    ['/reporting/rap/anrede.html?rubrik=reporting', 'reporting/rap/anrede.md'],
    ['/hilfe/alle-artikel.html', 'hilfe/alle-artikel.md'],
    ['/hilfe/mitarbeiten.html', 'CONTRIBUTING.md'],
    ['/hilfe/redaktionsworkflow.html', 'WORKFLOW.md'],
    ['/hilfe/vscode-editor.html', 'hilfe/vscode-editor.md'],
    ['/hilfe/github-editor.html', 'hilfe/github-editor.md']
  ]) {
    await page.goto(base + route, { waitUntil: 'networkidle' })
    await page.locator('.article-editor-link').first().waitFor()
    assert.equal(await page.locator('.article-editor-link').first().getAttribute('href'), 'https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/edit/dev/' + source)
    if (route.includes('-editor.html')) {
      const images = page.locator('.vp-doc img')
      assert.equal(await images.count(), route.includes('vscode') ? 14 : 6)
      for (const img of await images.all()) {
        await img.scrollIntoViewIfNeeded()
        await img.evaluate(node => node.decode())
      }
    }
  }
  await page.goto(base + '/schild2/auswahl.html?artikel=az', { waitUntil: 'networkidle' })
  await page.locator('.article-editor-link').first().waitFor()
  assert.equal(await page.locator('.article-editor-link').first().getAttribute('href'), 'https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/edit/dev/schild2/auswahl.md', 'A–Z-Kontext verändert das Bearbeitungsziel nicht')
  await page.goto(base + '/druck/hilfe.html', { waitUntil: 'networkidle' })
  assert.equal(await page.locator('.article-print-controls').count(), 0, 'Keine Artikel-Schaltflächen in Druckvorschauen')
}
