import { createContentLoader } from 'vitepress'

// The same published source directories as the site; migration evidence and
// build output are deliberately excluded. ContentLoader watches new files.
const patterns = ['index.md', 'einstieg/**/*.md', 'schild2/**/*.md',
  'zeugnisse/**/*.md', 'reporting/**/*.md', 'administration/**/*.md',
  'hilfe/**/*.md', 'programmreferenz/**/*.md', 'bilder/**/*.md']
const collator = new Intl.Collator('de', { sensitivity: 'base', numeric: true })
export default createContentLoader(patterns, {
  includeSrc: true,
  transform(pages) {
    return pages.filter(page => !page.frontmatter.redirect).map(page => ({
      title: String(page.frontmatter.title || page.src?.match(/^#\s+(.+)$/m)?.[1]
        || page.frontmatter.hero?.name || 'Startseite').replace(/[*`]/g, ''),
      url: page.url
    })).sort((a, b) => collator.compare(a.title, b.title) || collator.compare(a.url, b.url))
  }
})
