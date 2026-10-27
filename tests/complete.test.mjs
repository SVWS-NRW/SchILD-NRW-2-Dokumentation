import test from 'node:test'
import assert from 'node:assert/strict'
import { checkComplete } from '../scripts/check-complete.mjs'
test('Alle Wiki-Namensräume, Inhaltsseiten, Originaldateien und benötigten Tools bleiben lokal erhalten',()=>{
  const result=checkComplete()
  assert.ok(result.pages>1400)
  assert.ok(result.wikiFiles>=910)
  assert.deepEqual(result.errors,[])
})
