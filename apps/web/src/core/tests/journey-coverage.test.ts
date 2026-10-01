import { test } from 'node:test';
import assert from 'node:assert/strict';
import { illustrativeCatalog as catalog } from '../fixtures.ts';
import { createProject, setMaterial, setEquipment, confirmStage, journeyCoverage } from '../engine.ts';

test('cobertura da jornada pondera requisitos sem duplicar estoque entre etapas', () => {
  const initial = createProject(catalog, 'carrack-advance', 'epheria-sailboat');
  assert.equal(journeyCoverage(catalog, initial), 0);
  const readyFirst = setEquipment(catalog, setMaterial(catalog, initial, 'sample-wood', 100),
    'sample-gear', 'ready-10');
  assert.equal(journeyCoverage(catalog, readyFirst), 2 / 3);
  const completed = confirmStage(catalog, readyFirst);
  assert.equal(journeyCoverage(catalog, completed), 2 / 3);
  const readyFinal = setMaterial(catalog, completed, 'sample-wood', 60);
  assert.equal(journeyCoverage(catalog, readyFinal), 1);
  assert.equal(readyFinal.history.length, 1);
  assert.equal(journeyCoverage(catalog, confirmStage(catalog, readyFinal)), 1);
});

test('origem avançada calcula só o caminho restante; carraca existente tem cobertura completa', () => {
  const advanced = createProject(catalog, 'carrack-advance', 'epheria-caravel');
  assert.equal(journeyCoverage(catalog, setMaterial(catalog, advanced, 'sample-wood', 30)), 0.5);
  assert.equal(journeyCoverage(catalog, createProject(catalog, 'carrack-advance', 'carrack-advance')), 1);
});
