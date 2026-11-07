import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { createContentLoader, createMarkdownRenderer } from 'vitepress'
import { articleSources } from '../.vitepress/article-sources.mjs'
import metadata from '../.vitepress/image-catalog.json' with { type: 'json' }

export default createContentLoader(articleSources, {
  includeSrc: true,
  async transform(pages) {
    const config = globalThis.VITEPRESS_CONFIG
    const md = await createMarkdownRenderer(config.srcDir, config.markdown)
    const images = new Map(metadata.map(image => [image.path, { ...image, articles: [] }]))
    for (const page of pages) {
      const title = String(page.frontmatter.title || page.src.match(/^#\s+(.+)$/m)?.[1] || page.url)
      const seen = new Set()
      for (const block of md.parse(page.src, {})) {
        for (const token of block.children || []) {
          if (token.type !== 'image') continue
          const source = new URL(token.attrGet('src'), 'https://docs.invalid' + page.url)
          if (source.origin !== 'https://docs.invalid') continue
          const path = decodeURIComponent(source.pathname)
          if (!path.startsWith('/bilder/') || seen.has(path)) continue
          seen.add(path)
          if (!images.has(path)) {
            if (!existsSync(join(config.srcDir, 'public', path))) continue
            const original = path.split('/').at(-1)
            images.set(path, {
              path, original, title: token.content || original,
              folder: path.slice('/bilder/'.length, path.lastIndexOf('/')),
              captions: token.content ? [token.content] : [], articles: []
            })
          }
          images.get(path).articles.push({ title, link: page.url })
        }
      }
    }
    return [...images.values()]
  }
})
