import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timelineNodes } from '../timeline.ts';
import { saCatalog } from '../../sa-catalog.ts';
import { createProject, setMaterial, setEquipment, confirmStage, undoStage } from '../engine.ts';
import { stagesFrom } from '../catalog.ts';
import { compatibleOrigins } from '../origins.ts';

test('timeline respeita cada origem e preserva Melhorado sem etapa extra', () => {
  for (const route of saCatalog.routes) for (const origin of compatibleOrigins(saCatalog, route.destination)) {
    const project = createProject(saCatalog, route.destination, origin.id);
    const nodes = timelineNodes(saCatalog, project);
    assert.equal(nodes[0]?.boatId, origin.id);
    assert.equal(nodes.at(-1)?.boatId, route.destination);
    assert.equal(nodes.length, stagesFrom(saCatalog, route.destination, origin.id).length + 1);
    assert.equal(nodes.filter(node => node.owned).length, 1);
    assert.equal(nodes.filter(node => node.preparing).length, 1);
  }
});
test('disponibilidade não move posse; confirmação e desfazer movem destaque', () => {
  let project = createProject(saCatalog, 'carrack-advance', 'bartali');
  const stage = stagesFrom(saCatalog, project.destination, project.origin)[0];
  assert.ok(stage);
  for (const item of stage.requirements) project = item.kind === 'material'
    ? setMaterial(saCatalog, project, item.itemId, item.quantity)
    : setEquipment(saCatalog, project, item.itemId, 'ready-10');
  assert.equal(timelineNodes(saCatalog, project)[1]?.coverage, 1);
  assert.equal(timelineNodes(saCatalog, project)[0]?.owned, true);
  const confirmed = confirmStage(saCatalog, project);
  assert.equal(timelineNodes(saCatalog, confirmed)[1]?.owned, true);
  assert.equal(timelineNodes(saCatalog, confirmed)[1]?.confirmed, true);
  assert.equal(timelineNodes(saCatalog, undoStage(confirmed))[0]?.owned, true);
});
