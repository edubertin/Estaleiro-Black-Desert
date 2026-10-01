import { test } from 'node:test';
import assert from 'node:assert/strict';
import { illustrativeCatalog as catalog } from '../fixtures.ts';
import { parseCatalog } from '../catalog.ts';
import { calculate, changeDestination, confirmStage, createProject,
  setEquipment, setMaterial, undoStage } from '../engine.ts';
import { exportBackup, importBackup } from '../persistence.ts';
import type { Project } from '../schema.ts';

function ready(): Project {
  const initial = createProject(catalog, 'carrack-advance', 'epheria-sailboat');
  return setEquipment(catalog, setMaterial(catalog, initial, 'sample-wood', 160),
    'sample-gear', 'ready-10');
}

test('QA reserva e confirmação de duas etapas conservam estoque e histórico', () => {
  const initial = ready();
  const snapshot = structuredClone(initial);
  assert.deepEqual(calculate(catalog, initial).map(stage => stage.ready), [true, true]);
  assert.deepEqual(initial, snapshot);
  const first = confirmStage(catalog, initial);
  const final = confirmStage(catalog, first);
  assert.equal(final.inventory.materials['sample-wood'], 0);
  assert.equal(calculate(catalog, final).length, 0);
  assert.throws(() => confirmStage(catalog, final));
  assert.deepEqual(undoStage(undoStage(final)), initial);
});

test('QA desfazer com estoque desconhecido rejeita sem mutação parcial', () => {
  const state = setMaterial(catalog, confirmStage(catalog, ready()), 'sample-wood', null);
  const snapshot = structuredClone(state);
  assert.throws(() => undoStage(state), /Estoque desconhecido/);
  assert.deepEqual(state, snapshot);
});

test('QA troca compatível mantém estoque e histórico; incompatível não altera original', () => {
  const firstRoute = catalog.routes[0];
  assert.ok(firstRoute);
  const alternate = parseCatalog({ ...catalog, routes: [...catalog.routes,
    { destination: 'carrack-balance', stages: firstRoute.stages.map((stage, index) =>
      index === 0 ? stage : { ...stage, id: 'sample-balance', to: 'carrack-balance' }) },
  ] });
  const completed = confirmStage(alternate, ready());
  const switched = changeDestination(alternate, completed, 'carrack-balance', 'epheria-sailboat');
  assert.deepEqual(switched.inventory, completed.inventory);
  assert.deepEqual(switched.history, completed.history);
  const snapshot = structuredClone(completed);
  assert.throws(() => changeDestination(alternate, completed, 'carrack-balance', 'epheria-caravel'));
  assert.deepEqual(completed, snapshot);
});

test('QA importação rejeita envelopes futuros, campos extras e itens incompatíveis', () => {
  const state = ready();
  const variants: unknown[] = [
    { format: 99, project: state },
    { format: 1, project: state, unexpected: true },
    { format: 1, project: { ...state, catalogVersion: 'future-v2' } },
    { format: 1, project: { ...state, inventory: { ...state.inventory,
      materials: { 'sample-gear': 1 } } } },
    { format: 1, project: { ...state, origin: 'epheria-frigate' } },
  ];
  for (const variant of variants) assert.throws(() => importBackup(catalog, JSON.stringify(variant)));
  assert.deepEqual(importBackup(catalog, exportBackup(catalog, state)), state);
});

test('QA importação rejeita histórico fora de ordem e equipamento duplicado', () => {
  const completed = confirmStage(catalog, ready());
  const entry = completed.history[0];
  assert.ok(entry);
  for (const history of [
    [{ ...entry, stageId: 'sample-carrack' }],
    [{ ...entry, equipment: ['sample-gear', 'sample-gear'] }],
    [{ ...entry, materials: { 'sample-wood': 100, extra: 0 } }],
    [entry, entry],
  ]) assert.throws(() => importBackup(catalog,
    JSON.stringify({ format: 1, project: { ...completed, history } })));
});
