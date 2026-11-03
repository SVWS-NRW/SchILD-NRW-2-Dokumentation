// Prepare transient print content without changing articles or the reader's state.
export function installPrintLayout(win = window) {
  let saved = null
  const prepare = () => {
    if (saved) return
    const article = win.document.querySelector('.vp-doc')
    if (!article) return
    saved = { details: [], images: [], additions: [] }
    for (const details of article.querySelectorAll('details')) {
      saved.details.push([details, details.open])
      details.open = true
    }
    for (const image of article.querySelectorAll('img')) {
      saved.images.push([image, image.getAttribute('loading')])
      image.loading = 'eager'
    }
    const source = win.document.createElement('p')
    source.className = 'print-only print-source'
    source.textContent = `SchILD-NRW 2 Dokumentation · ${win.location.origin}${win.location.pathname}`
    article.before(source)
    saved.additions.push(source)
    for (const frame of article.querySelectorAll('iframe[src]')) {
      const url = new URL(frame.getAttribute('src'), win.location.href)
      if (!['http:', 'https:'].includes(url.protocol)) continue
      let label = 'Eingebetteter Inhalt'
      if (/(^|\.)(youtube(?:-nocookie)?\.com)$/.test(url.hostname) && url.pathname.startsWith('/embed/')) {
        const video = url.pathname.split('/')[2]
        url.href = `https://www.youtube.com/watch?v=${encodeURIComponent(video)}`
        label = 'Video'
      }
      const note = win.document.createElement('p')
      note.className = 'print-only print-media-link'
      note.append(`${label}: `)
      const link = win.document.createElement('a')
      link.href = url.href
      link.textContent = url.href
      note.append(link)
      frame.after(note)
      saved.additions.push(note)
    }
  }
  const restore = () => {
    if (!saved) return
    for (const [details, open] of saved.details) details.open = open
    for (const [image, loading] of saved.images) {
      if (loading === null) image.removeAttribute('loading')
      else image.setAttribute('loading', loading)
    }
    for (const addition of saved.additions) addition.remove()
    saved = null
  }
  const media = win.matchMedia('print')
  const onMediaChange = event => event.matches ? prepare() : restore()
  win.addEventListener('beforeprint', prepare)
  win.addEventListener('afterprint', restore)
  media.addEventListener('change', onMediaChange)
  return () => {
    restore()
    win.removeEventListener('beforeprint', prepare)
    win.removeEventListener('afterprint', restore)
    media.removeEventListener('change', onMediaChange)
  }
}
