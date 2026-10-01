import { test } from 'node:test';
import assert from 'node:assert/strict';
import { illustrativeCatalog as catalog } from '../fixtures.ts';
import { calculate, confirmStage, createProject, setEquipment, setMaterial, undoStage } from '../engine.ts';
import { exportBackup, importBackup } from '../persistence.ts';

test('graus exatos persistem; apenas +10 permite consumir a peça e desfazer restaura +10', () => {
  const initial = setMaterial(catalog, createProject(catalog, 'carrack-advance', 'epheria-sailboat'), 'sample-wood', 100);
  for (let level = 0; level <= 10; level++) {
    const project = setEquipment(catalog, initial, 'sample-gear', level);
    assert.deepEqual(importBackup(catalog, exportBackup(catalog, project)), project);
    assert.equal(calculate(catalog, project)[0]?.ready, level === 10);
    if (level < 10) assert.throws(() => confirmStage(catalog, project));
    else assert.equal(undoStage(confirmStage(catalog, project)).inventory.equipment['sample-gear'], 10);
  }
  for (const value of [-1, 11, 2.5, NaN, '5']) assert.throws(() => setEquipment(catalog, initial, 'sample-gear', value));
});

test('backup antigo preserva ausência e grau desconhecido; pronto migra para +10', () => {
  const project = createProject(catalog, 'carrack-advance', 'epheria-sailboat');
  for (const [legacy, expected] of [['missing', 'missing'], ['below-10', 'below-10'], ['ready-10', 10]]) {
    const restored = importBackup(catalog, JSON.stringify({ format: 1, project: { ...project,
      inventory: { materials: {}, equipment: { 'sample-gear': legacy } } } }));
    assert.equal(restored.inventory.equipment['sample-gear'], expected);
    assert.equal(JSON.parse(exportBackup(catalog, restored)).format, 2);
  }
});
