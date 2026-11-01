import test from 'node:test'
import assert from 'node:assert/strict'
import { selectedSidebarLink } from '../.vitepress/theme/sidebar-selection.mjs'
import { contextualSidebar } from '../.vitepress/section-navigation.mjs'

test('Doppelte Artikellinks behalten eine eindeutige Auswahl beim Neuladen und bei Unterpfaden', () => {
  const links = ['/doku/lehrkraefte.html?rubrik=schild2&menue=2.0', '/doku/lehrkraefte.html?rubrik=schild2&menue=4']
  assert.equal(selectedSidebarLink(links, 'https://docs.test/doku/lehrkraefte.html?menue=4'), 1)
  assert.equal(selectedSidebarLink(links, 'https://docs.test/doku/lehrkraefte.html?menue=2.0'), 0)
  assert.equal(selectedSidebarLink(links, 'https://docs.test/doku/lehrkraefte.html'), 0)
  assert.equal(selectedSidebarLink(links, 'https://docs.test/doku/anderer-artikel.html'), -1)
  assert.equal(selectedSidebarLink(['/hilfe/mitarbeiten.html', '/hilfe/mitarbeiten.html?artikel=az'], 'https://docs.test/hilfe/mitarbeiten.html?artikel=az'), 1)
})

test('Nur der gewählte Themenzweig eines mehrfach verlinkten Artikels wird standardmäßig geöffnet', () => {
  const groups = [{ text: 'Arbeiten', items: [
    { text: 'Erste Schritte', items: [{ text: 'Lehrkräfte', link: '/lehrkraefte' }] },
    { text: 'Schuldaten', items: [{ text: 'Lehrkräfte', link: '/lehrkraefte' }] }
  ] }]
  const menu = contextualSidebar(groups, '/schild2/', '/lehrkraefte', '1.0')[0].items
  assert.equal(menu[0].collapsed, true)
  assert.equal(menu[1].collapsed, false)
  assert.equal(new URL(menu[1].items[0].link, 'https://docs.test').searchParams.get('menue'), '1.0')
})
