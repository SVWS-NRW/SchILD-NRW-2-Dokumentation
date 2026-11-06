import { createContentLoader } from 'vitepress'

import { articleSources } from '../.vitepress/article-sources.mjs'

const collator = new Intl.Collator('de', { sensitivity: 'base', numeric: true })
export default createContentLoader(articleSources, {
  includeSrc: true,
  transform(pages) {
    return pages.filter(page => !page.frontmatter.redirect).map(page => ({
      title: String(page.frontmatter.title || page.src?.match(/^#\s+(.+)$/m)?.[1]
        || page.frontmatter.hero?.name || 'Startseite').replace(/[*`]/g, ''),
      url: page.url
    })).sort((a, b) => collator.compare(a.title, b.title) || collator.compare(a.url, b.url))
  }
})
