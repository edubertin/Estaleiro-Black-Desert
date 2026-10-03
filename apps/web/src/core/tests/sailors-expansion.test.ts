import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { sailorExpansionReferences } from '../../content/sailors-expansion-data.ts';

test('expansão preserva IDs verificados e intervalos comunitários de nível 10', () => {
  const ids = sailorExpansionReferences.map(sailor => sailor.id);
  assert.equal(ids.length, 14);
  assert.equal(new Set(ids).size, 14);
  assert.ok(ids.includes(59101) && ids.includes(59227) && ids.includes(59228));
  for (const sailor of sailorExpansionReferences) {
    assert.equal(sailor.level, 10);
    assert.equal(sailor.evidenceStatus, 'community-reference-sa-pending');
    assert.equal(sailor.attributes.length, 8);
    for (const attribute of sailor.attributes) {
      assert.ok(Number.isFinite(attribute.minimum));
      assert.ok(attribute.minimum >= 0 && attribute.minimum <= attribute.maximum);
    }
  }
});

test('assets integrados têm quadros de corpo e piscada na mesma resolução', () => {
  for (const sailor of sailorExpansionReferences.filter(reference => reference.id < 59227)) {
    const slug = sailor.sourceName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const dimensions = ['corpo', 'olhos-fechados'].map(kind => {
      const png = readFileSync(`assets/marinheiros/preview/expansion-${slug}-${kind}-v1.png`);
      assert.equal(png.subarray(1, 4).toString(), 'PNG');
      assert.equal(png[25], 6, 'PNG precisa conter canal alpha');
      return [png.readUInt32BE(16), png.readUInt32BE(20)];
    });
    assert.deepEqual(dimensions[0], [1024, 1536]);
    assert.deepEqual(dimensions[1], dimensions[0]);
  }
});

test('perfis de navegação e combate não recebem intervalos de outro marinheiro', () => {
  const speed = sailorExpansionReferences.find(sailor => sailor.id === 59053);
  const combat = sailorExpansionReferences.find(sailor => sailor.id === 59072);
  assert.equal(speed?.attributes.find(attribute => attribute.id === 'focus')?.maximum, 0);
  assert.equal(combat?.attributes.find(attribute => attribute.id === 'focus')?.maximum, 13);
  const seaBorn = sailorExpansionReferences.find(sailor => sailor.id === 59070);
  assert.equal(seaBorn?.sourceName, 'Born in the Sea');
  assert.equal(seaBorn?.sourceSheet, 'Born on the Sea');
});
