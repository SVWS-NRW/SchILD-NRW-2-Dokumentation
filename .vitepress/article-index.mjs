// Preserve the canonical article URL while selecting the editorial Help menu.
export function articleIndexLink(url) {
  const target = new URL(url, 'https://local.invalid')
  target.searchParams.delete('referenz')
  target.searchParams.set('artikel', 'az')
  return target.pathname + target.search + target.hash
}
