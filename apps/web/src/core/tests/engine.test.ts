import { test } from 'node:test';
import assert from 'node:assert/strict';
import { illustrativeCatalog as catalog } from '../fixtures.ts';
import { calculate, confirmStage, createProject, setEquipment, setMaterial, undoStage } from '../engine.ts';
import { exportBackup, importBackup, loadProject, saveProject } from '../persistence.ts';
import { parseCatalog } from '../catalog.ts';

function project(): ReturnType<typeof createProject> {
  return createProject(catalog, 'carrack-advance', 'epheria-sailboat');
}
function ready(): ReturnType<typeof createProject> {
  return setEquipment(catalog, setMaterial(catalog, project(), 'sample-wood', 140),
    'sample-gear', 'ready-10');
}

test('estoque compartilhado é alocado na etapa atual primeiro', () => {
  const result = calculate(catalog, ready());
  assert.equal(result[0]?.ready, true);
  assert.equal(result[1]?.requirements[0]?.allocated, 40);
  assert.equal(result[1]?.requirements[0]?.missing, 20);
  assert.equal(ready().history.length, 0);
});
test('abaixo de +10 bloqueia; cobertura é média por requisito', () => {
  const state = setMaterial(catalog, project(), 'sample-wood', 40);
  assert.equal(calculate(catalog, state)[0]?.coverage, 0.2);
  assert.throws(() => confirmStage(catalog, setEquipment(catalog, ready(), 'sample-gear', 'below-10')));
});
test('confirma consome uma vez e desfazer preserva aquisição posterior', () => {
  const completed = confirmStage(catalog, ready());
  assert.equal(completed.inventory.materials['sample-wood'], 40);
  assert.equal(completed.history.length, 1);
  assert.throws(() => confirmStage(catalog, completed));
  const edited = setMaterial(catalog, completed, 'sample-wood', 70);
  assert.equal(undoStage(edited).inventory.materials['sample-wood'], 170);
  assert.equal(ready().inventory.materials['sample-wood'], 140);
});
test('desfazer não apaga alterações posteriores no equipamento', () => {
  const state = setEquipment(catalog, confirmStage(catalog, ready()), 'sample-gear', 'below-10');
  assert.throws(() => undoStage(state), /Equipamento editado/);
});
test('desconhecido difere de zero; excedente fica no estoque', () => {
  assert.equal(calculate(catalog, project())[0]?.requirements[0]?.unknown, true);
  const zero = setMaterial(catalog, project(), 'sample-wood', 0);
  assert.equal(calculate(catalog, zero)[0]?.requirements[0]?.unknown, false);
  const excess = setMaterial(catalog, ready(), 'sample-wood', 500);
  assert.equal(calculate(catalog, excess)[0]?.coverage, 1);
  assert.equal(excess.inventory.materials['sample-wood'], 500);
});
test('origem avançada pula etapas, origem incompatível é rejeitada', () => {
  assert.equal(calculate(catalog, createProject(catalog, 'carrack-advance', 'epheria-caravel')).length, 1);
  assert.throws(() => createProject(catalog, 'carrack-advance', 'epheria-frigate'));
});
test('inputs inválidos são rejeitados', () => {
  for (const value of [-1, 1.5, NaN, Infinity, '4', Number.MAX_SAFE_INTEGER + 1])
    assert.throws(() => setMaterial(catalog, project(), 'sample-wood', value));
  assert.throws(() => setMaterial(catalog, project(), 'constructor', 4));
});
test('backup conserva estado e rejeita histórico adulterado ou versão futura', () => {
  const state = confirmStage(catalog, ready());
  assert.deepEqual(importBackup(catalog, exportBackup(catalog, state)), state);
  assert.throws(() => exportBackup(catalog, { ...state, catalogVersion: 'future' }));
  assert.throws(() => exportBackup(catalog, { ...state, history: [
    { stageId: 'sample-caravel', materials: { 'sample-wood': 1 }, equipment: ['sample-gear'] },
  ] }));
  assert.throws(() => importBackup(catalog, '{invalid'));
});
test('salvamento retoma e propaga falhas sem destruir backup anterior', () => {
  const entries = new Map<string, string>();
  const storage = { getItem: (key: string): string | null => entries.get(key) ?? null,
    setItem: (key: string, value: string): void => { entries.set(key, value); } };
  assert.equal(loadProject(storage, catalog), null);
  saveProject(storage, catalog, ready());
  assert.deepEqual(loadProject(storage, catalog), ready());
  const broken = { ...storage, setItem: (): never => { throw new Error('Quota'); } };
  assert.throws(() => saveProject(broken, catalog, ready()), /Quota/);
  assert.deepEqual(loadProject(storage, catalog), ready());
});
test('fixture não pode virar catálogo publicável sem conferência', () => {
  assert.throws(() => parseCatalog({ ...catalog, illustrative: false }), /conferência SA/);
});
