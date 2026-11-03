import { articlePath } from '../section-navigation.mjs'

// VitePress's native active-state test ignores query parameters. Keep its
// standard menu and accessibility controls, but identify repeated entries by
// the menu occurrence carried in their URL.
export function selectedSidebarLink(hrefs, currentHref) {
  const current = new URL(currentHref)
  const candidates = hrefs.map((href, index) => ({ url: new URL(href, current), index }))
    .filter(({ url }) => url.origin === current.origin && articlePath(url.href) === articlePath(current.href))
  const menu = current.searchParams.get('menue')
  const indexMode = current.searchParams.get('artikel') === 'az'
  return (candidates.find(({ url }) => menu && url.searchParams.get('menue') === menu)
    || candidates.find(({ url }) => indexMode && url.searchParams.get('artikel') === 'az')
    || candidates.find(({ url }) => current.hash && url.hash === current.hash)
    || candidates.find(({ url }) => !url.hash)
    || candidates[0])?.index ?? -1
}

export function installSidebarSelection(win = window) {
  let queued = false, stopped = false
  function refresh() {
    queued = false
    if (stopped) return
    const nav = win.document.querySelector('#VPSidebarNav')
    if (!nav || nav.closest('.program-reference-view')) return
    const links = [...nav.querySelectorAll('a[href]')]
    const selected = links[selectedSidebarLink(links.map(link => link.href), win.location.href)]
    const activeItem = selected?.closest('.VPSidebarItem')
    for (const item of nav.querySelectorAll('.VPSidebarItem')) {
      for (const [name, enabled] of [['is-active', item === activeItem], ['has-active', !!activeItem && item.contains(activeItem)]]) {
        if (item.classList.contains(name) !== enabled) item.classList.toggle(name, enabled)
      }
    }
    for (const link of links) {
      if (link === selected) {
        if (link.getAttribute('aria-current') !== 'page') link.setAttribute('aria-current', 'page')
      } else if (link.hasAttribute('aria-current')) link.removeAttribute('aria-current')
    }
  }
  function schedule() {
    if (!queued && !stopped) { queued = true; win.queueMicrotask(refresh) }
  }
  const observer = new win.MutationObserver(schedule)
  observer.observe(win.document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'href'] })
  win.addEventListener('popstate', schedule)
  win.addEventListener('hashchange', schedule)
  schedule()
  return () => {
    stopped = true
    observer.disconnect()
    win.removeEventListener('popstate', schedule)
    win.removeEventListener('hashchange', schedule)
  }
}
