export async function printDocument(win = window) {
  const images = [...win.document.querySelectorAll('.vp-doc img')]
  const loading = images.map(image => image.getAttribute('loading'))
  try {
    await Promise.all(images.map(async image => {
      image.loading = 'eager'
      if (!image.complete) await new Promise((resolve, reject) => {
        const cleanup = () => { image.removeEventListener('load', loaded); image.removeEventListener('error', failed) }
        const loaded = () => { cleanup(); resolve() }
        const failed = () => { cleanup(); reject(new Error(`Bild konnte nicht geladen werden: ${image.src}`)) }
        image.addEventListener('load', loaded, { once: true })
        image.addEventListener('error', failed, { once: true })
      })
      if (!image.naturalWidth) throw new Error(`Bild fehlt: ${image.src}`)
      try { await image.decode() }
      catch (error) {
        // Some browser versions reject decode() for an already loaded image.
        if (!image.complete || !image.naturalWidth) throw error
      }
    }))
    await win.document.fonts.ready
    win.print()
  } finally {
    images.forEach((image, index) => {
      if (loading[index] === null) image.removeAttribute('loading')
      else image.setAttribute('loading', loading[index])
    })
  }
}
