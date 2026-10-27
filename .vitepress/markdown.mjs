import { configureHintBoxes } from './hint-boxes.mjs'

// Keep literal punctuation in configuration and code examples unchanged.
export const containerLabels = {
  infoLabel: 'Hinweis', tipLabel: 'Tipp', warningLabel: 'Wichtig',
  dangerLabel: 'Achtung', detailsLabel: 'Details'
}

export function configureMarkdown(md) {
  configureHintBoxes(md)
  md.disable('emoji')

  // VitePress 1.6 leaves escaped characters as text_special inside image labels.
  // Preserve those literal characters when Markdown builds the plain alt text.
  const renderAlt = md.renderer.renderInlineAsText
  md.renderer.renderInlineAsText = (tokens, ...args) => renderAlt.call(md.renderer,
    tokens.map(token => token.type === 'text_special' ? { ...token, type: 'text' } : token), ...args)


  // Ordinary Markdown field tables share one accessible, horizontally scrollable layout.
  md.core.ruler.after('inline', 'field-tables', state => {
    for (let i = 0; i < state.tokens.length; i++) {
      if (state.tokens[i].type !== 'table_open') continue
      let end = i + 1
      while (end < state.tokens.length && state.tokens[end].type !== 'table_close') end++
      const headEnd = state.tokens.findIndex((t, j) => j > i && t.type === 'thead_close')
      const headers = state.tokens.slice(i, headEnd).filter(t => t.type === 'inline').map(t => t.content)
      if (headers.join('|') !== 'Spalte|Beschreibung|Header-Text|Datentyp|Darf leer sein?|Bemerkung') continue
      let title = 'Feldbeschreibung'
      for (let j = i - 1; j >= 0; j--) {
        if (state.tokens[j].type === 'heading_open') { title += ': ' + state.tokens[j + 1].content; break }
      }
      state.tokens[i].attrJoin('class', 'interface-fields')
      state.tokens[i].meta = { fieldTable: true, title }
      state.tokens[end].meta = { fieldTable: true }
    }
  })
  const tableOpen = md.renderer.rules.table_open || ((tokens, i, options, env, self) => self.renderToken(tokens, i, options))
  const tableClose = md.renderer.rules.table_close || ((tokens, i, options, env, self) => self.renderToken(tokens, i, options))
  md.renderer.rules.table_open = (tokens, i, options, env, self) => {
    const opening = tableOpen(tokens, i, options, env, self)
    if (!tokens[i].meta?.fieldTable) return opening
    const columns = ['number', 'description', 'header', 'type', 'nullable', 'remarks'].map(name => `<col class="field-${name}">`).join('')
    return `<div class="interface-table-scroll" tabindex="0" role="region" aria-label="${md.utils.escapeHtml(tokens[i].meta.title)}">` + opening.replace('<table', '<table class="interface-fields"') + `<colgroup>${columns}</colgroup>`
  }
  md.renderer.rules.table_close = (tokens, i, options, env, self) => tableClose(tokens, i, options, env, self) + (tokens[i].meta?.fieldTable ? '</div>\n' : '')
}
