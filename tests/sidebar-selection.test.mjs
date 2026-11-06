import test from 'node:test'
import assert from 'node:assert/strict'
import { createReadingMenu } from '../.vitepress/section-navigation.mjs'

test('Nur der gewählte Themenzweig eines mehrfach verlinkten Artikels wird standardmäßig geöffnet', () => {
  const groups = [{ text: 'Arbeiten', items: [
    { text: 'Erste Schritte', items: [{ text: 'Lehrkräfte', link: '/lehrkraefte' }] },
    { text: 'Schuldaten', items: [{ text: 'Lehrkräfte', link: '/lehrkraefte' }] }
  ] }]
  const shared = createReadingMenu(groups, '/schild2/')
  const menu = shared.forArticle('/lehrkraefte', '1.0')[0].items
  assert.equal(menu[0], shared.tree[0].items[0], 'Der unbeteiligte Zweig wird wiederverwendet')
  assert.equal(shared.forArticle('/lehrkraefte')[0].items[0].items[0].sidebarActive, true)
  assert.equal(menu[0].collapsed, true)
  assert.equal(menu[1].collapsed, false)
  assert.equal(menu[0].items[0].sidebarActive, false)
  assert.equal(menu[1].items[0].sidebarActive, true)
  assert.equal(new URL(menu[1].items[0].link, 'https://docs.test').searchParams.get('menue'), '1.0')
})
