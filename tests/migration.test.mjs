import test from 'node:test'
import assert from 'node:assert/strict'
import { checkMigration } from '../scripts/check-migration.mjs'

test('Originalquellen und Dateien bleiben intakt; entfernte Leerseiten haben dokumentierte Ziele', () => {
  const result = checkMigration()
  assert.ok(result.articles > 400)
  assert.ok(result.assets > 700)
  assert.deepEqual(result.errors, [])
})
