import test from 'node:test'
import assert from 'node:assert/strict'
import { checkMigration } from '../scripts/check-migration.mjs'

test('Jede Originalseite ist mit Quellversion, Sprungmarken und Menüeintrag erhalten; alle Dateien sind unverändert', () => {
  const result = checkMigration()
  assert.ok(result.articles > 400)
  assert.ok(result.assets > 700)
  assert.deepEqual(result.errors, [])
})
