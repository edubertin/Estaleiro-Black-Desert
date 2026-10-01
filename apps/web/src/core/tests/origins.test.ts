import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCatalog, stagesFrom } from '../catalog.ts';
import { compatibleOrigins } from '../origins.ts';
import { createProject } from '../engine.ts';
import { exportBackup, importBackup } from '../persistence.ts';
import type { Catalog, Stage } from '../schema.ts';

function route(destination: string, combat: boolean): { destination: string; stages: Stage[] } {
  const boats = combat ? ['bartali', 'epheria-frigate', 'epheria-galleass', destination]
    : ['bartali', 'epheria-sailboat', 'epheria-caravel', destination];
  return { destination, stages: boats.slice(0, -1).map((from, index) => ({
    id: `${destination}-step-${index}`, from, to: boats[index + 1] ?? destination,
    requirements: [{ kind: 'material', itemId: 'sample-material', quantity: 1 }],
  })) };
}

function fixture(): Catalog {
  return parseCatalog({ version: 'origins-fixture-v1', region: 'SA', illustrative: true,
    items: [{ id: 'sample-material', name: 'Ilustrativo', kind: 'material',
      source: null, verifiedSA: false }],
    routes: [route('carrack-advance', false), route('carrack-balance', false),
      route('carrack-volante', true), route('carrack-valor', true)],
  });
}

test('cada carraca oferece apenas a família precursora compatível, incluindo Melhorado', () => {
  const catalog = fixture();
  const trade = ['bartali', 'epheria-sailboat', 'epheria-sailboat-improved', 'epheria-caravel'];
  const combat = ['bartali', 'epheria-frigate', 'epheria-frigate-improved', 'epheria-galleass'];
  for (const entry of catalog.routes) {
    const expected = ['carrack-advance', 'carrack-balance'].includes(entry.destination) ? trade : combat;
    assert.deepEqual(compatibleOrigins(catalog, entry.destination).map(origin => origin.id), expected);
    for (const origin of expected) assert.ok(stagesFrom(catalog, entry.destination, origin).length);
    for (const origin of [...trade, ...combat].filter(id => !expected.includes(id)))
      assert.throws(() => createProject(catalog, entry.destination, origin), /incompatível/);
    assert.throws(() => createProject(catalog, entry.destination, 'panokseon'), /incompatível/);
  }
});

test('Melhorado preserva identidade no backup e não acrescenta etapa ou requisito', () => {
  const catalog = fixture();
  const cases = [['carrack-advance', 'epheria-sailboat'], ['carrack-valor', 'epheria-frigate']];
  for (const [destination, base] of cases) {
    assert.ok(destination && base);
    const origin = `${base}-improved`;
    const project = createProject(catalog, destination, origin);
    assert.deepEqual(stagesFrom(catalog, destination, origin), stagesFrom(catalog, destination, base));
    assert.equal(importBackup(catalog, exportBackup(catalog, project)).origin, origin);
    const incompatible = { ...project, origin: base === 'epheria-sailboat'
      ? 'epheria-frigate-improved' : 'epheria-sailboat-improved' };
    assert.throws(() => importBackup(catalog, JSON.stringify({ format: 1, project: incompatible })));
  }
});

test('carraca existente é estado final separado e nunca precursor de outro destino', () => {
  const catalog = fixture();
  for (const entry of catalog.routes) {
    assert.deepEqual(stagesFrom(catalog, entry.destination, entry.destination), []);
    assert.ok(!compatibleOrigins(catalog, entry.destination).some(origin => origin.id === entry.destination));
    for (const other of catalog.routes.filter(candidate => candidate !== entry))
      assert.throws(() => createProject(catalog, entry.destination, other.destination), /incompatível/);
  }
  assert.throws(() => compatibleOrigins(catalog, 'missing'), /desconhecido/);
});
