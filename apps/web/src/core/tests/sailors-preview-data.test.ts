import assert from 'node:assert/strict';
import test from 'node:test';
import { puroLevelTen, realisticLevelTen, confidentLevelTen, quickLevelTen, curiousLevelTen, calculatingLevelTen, experiencedLevelTen, treasureLevelTen, tenaciousLevelTen } from '../../content/sailors-preview-data.ts';

test('referências de marinheiros distinguem identidades e mantêm oito intervalos válidos', () => {
  const references = [puroLevelTen, realisticLevelTen, confidentLevelTen, quickLevelTen, curiousLevelTen, calculatingLevelTen, experiencedLevelTen, treasureLevelTen, tenaciousLevelTen];
  assert.equal(new Set(references.map(sailor => sailor.id)).size, references.length);
  for (const sailor of references) {
    assert.equal(sailor.level, 10);
    assert.equal(sailor.evidenceStatus, 'community-reference-sa-pending');
    assert.equal(sailor.attributes.length, 8);
    assert.equal(new Set(sailor.attributes.map(attribute => attribute.id)).size, 8);
    for (const attribute of sailor.attributes) {
      assert.ok(Number.isFinite(attribute.minimum));
      assert.ok(Number.isFinite(attribute.maximum));
      assert.ok(attribute.minimum >= 0 && attribute.minimum <= attribute.maximum);
    }
  }
});

test('Puro e Realistic não compartilham intervalos de velocidade ou ângulo de tiro', () => {
  assert.equal(puroLevelTen.attributes.find(attribute => attribute.id === 'vision')?.maximum, 0);
  assert.equal(realisticLevelTen.attributes.find(attribute => attribute.id === 'vision')?.maximum, 48);
  assert.equal(puroLevelTen.attributes.find(attribute => attribute.id === 'stamina')?.maximum, 4);
  assert.equal(realisticLevelTen.attributes.find(attribute => attribute.id === 'stamina')?.maximum, 2.5);
});
