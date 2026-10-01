import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { saCatalog } from '../../sa-catalog.ts';
import { saEditorialCatalog } from '../../content/sa-editorial.ts';
import { saObtainmentEvidence } from '../../content/sa-obtainment.ts';
import { stagesFrom } from '../catalog.ts';
import { createProject, setMaterial, setEquipment, confirmStage, undoStage, calculate } from '../engine.ts';
import { exportBackup, importBackup } from '../persistence.ts';
import type { Project, Stage } from '../schema.ts';
import { illustrativeCatalog } from '../fixtures.ts';
import { readCatalogBackup } from '../catalog-registry.ts';

function materialAmount(stage: Stage, id: string): number | undefined {
  const item = stage.requirements.find(entry => entry.itemId === id);
  return item?.kind === 'material' ? item.quantity : undefined;
}

function ready(stage: Stage, project: Project): Project {
  let next = project;
  for (const requirement of stage.requirements) next = requirement.kind === 'material'
    ? setMaterial(saCatalog, next, requirement.itemId, requirement.quantity + 1)
    : setEquipment(saCatalog, next, requirement.itemId, 'ready-10');
  return next;
}

test('SA aplica redução oficial de Bartali e ouro sem o requisito antigo de Poste', () => {
  const sail = stagesFrom(saCatalog, 'carrack-advance', 'bartali')[0];
  const frigate = stagesFrom(saCatalog, 'carrack-valor', 'bartali')[0];
  assert.ok(sail && frigate);
  for (const [stage, quantities] of [[sail, [350, 250, 700, 100]], [frigate, [450, 350, 750, 200]]] as const) {
    const materials = stage.requirements.filter(item => item.kind === 'material');
    assert.deepEqual(materials.filter(item => !item.itemId.startsWith('licenca-')
      && item.itemId !== 'gold-bar-1000g').map(item => item.quantity), quantities);
    assert.equal(materialAmount(stage, 'gold-bar-1000g'), 5);
    assert.ok(!stage.requirements.some(item => item.itemId.includes('poste')));
  }
});

test('SA variantes finais conservam diferenças de materiais e família correta das peças', () => {
  const cases = [['carrack-advance', 'epheria-caravel', 35, 42, 180, 144],
    ['carrack-balance', 'epheria-caravel', 30, 50, 180, 144],
    ['carrack-volante', 'epheria-galleass', 30, 42, 210, 144],
    ['carrack-valor', 'epheria-galleass', 30, 42, 180, 170]] as const;
  for (const [destination, origin, salt, eye, flax, wood] of cases) {
    const stage = stagesFrom(saCatalog, destination, origin)[0]; assert.ok(stage);
    assert.equal(materialAmount(stage, 'barra-de-sal-de-rocha-exuberante'), salt);
    assert.equal(materialAmount(stage, 'olho-abissal'), eye);
    assert.equal(materialAmount(stage, 'tecido-de-linho-com-a-veia-da-lua-gravada'), flax);
    assert.equal(materialAmount(stage, 'madeira-de-construcao-envolto-com-um-brilho-azul-marinho'), wood);
    const gear = stage.requirements.filter(item => item.kind === 'equipment');
    assert.equal(gear.length, 4);
    assert.ok(gear.every(item => item.itemId.startsWith(origin === 'epheria-caravel'
      ? 'navio-mercante-de-epheria-' : 'contratorpedeiro-de-epheria-')));
  }
});

test('jornadas SA completas conservam excedentes, consumo, backup e desfazer', () => {
  for (const route of saCatalog.routes) {
    let project = createProject(saCatalog, route.destination, 'bartali');
    for (const stage of route.stages) {
      const prepared = ready(stage, project);
      assert.equal(calculate(saCatalog, prepared)[0]?.ready, true);
      const completed = confirmStage(saCatalog, prepared);
      assert.deepEqual(undoStage(completed), prepared);
      project = importBackup(saCatalog, exportBackup(saCatalog, completed));
      for (const item of stage.requirements.filter(entry => entry.kind === 'material'))
        assert.equal(project.inventory.materials[item.itemId], 1);
    }
    assert.equal(calculate(saCatalog, project).length, 0);
    assert.equal(project.history.length, 3);
  }
});

test('catálogo SA tem rastreabilidade, ajuda para todos os materiais e PNGs íntegros', () => {
  assert.equal(saCatalog.illustrative, false);
  assert.equal(saCatalog.items.length, 43);
  for (const item of saCatalog.items) {
    assert.ok(item.source?.startsWith('https://'));
    assert.equal(item.verifiedSA, true);
    const evidence = saEditorialCatalog.items.find(entry => entry.id === item.id); assert.ok(evidence);
    assert.equal(evidence.clientChecked, false);
    if (item.kind === 'material') assert.ok(saObtainmentEvidence.some(entry => entry.itemId === item.id));
    const path = `assets/itens/originais/${item.id}.png`;
    assert.ok(existsSync(path), `Ícone ausente: ${item.id}`);
    const png = readFileSync(path);
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  }
});

test('registro escolhe catálogo do backup sem converter itens nem aceitar versões desconhecidas', () => {
  const catalogs = [saCatalog, illustrativeCatalog];
  const fixture = createProject(illustrativeCatalog, 'carrack-advance', 'epheria-sailboat');
  const demo = setMaterial(illustrativeCatalog, fixture, 'sample-wood', 101);
  const restored = readCatalogBackup(catalogs, exportBackup(illustrativeCatalog, demo));
  assert.equal(restored.catalog.version, illustrativeCatalog.version);
  assert.deepEqual(restored.project, demo);
  const real = createProject(saCatalog, 'carrack-volante', 'epheria-frigate-improved');
  assert.equal(readCatalogBackup(catalogs, exportBackup(saCatalog, real)).project.origin, real.origin);
  const variants = [{ ...real, catalogVersion: 'unknown-version' },
    { ...real, inventory: demo.inventory }];
  for (const project of variants)
    assert.throws(() => readCatalogBackup(catalogs, JSON.stringify({ format: 1, project })));
});
