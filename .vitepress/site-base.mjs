// Domain and local preview use '/'; GitHub Pages can build with a repository prefix.
export function normalizeSiteBase(value = '/') {
  if (!value.startsWith('/') || value.startsWith('//') || /[?#\\]/.test(value) || value.split('/').some(part => part === '.' || part === '..')) throw new Error('DOCS_BASE muss ein absoluter URL-Pfad sein.')
  return value === '/' ? '/' : value.replace(/\/+$/, '') + '/'
}
export const siteBase = normalizeSiteBase(process.env.DOCS_BASE || '/')
