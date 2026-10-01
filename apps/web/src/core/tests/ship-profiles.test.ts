import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shipProfile, shipProfiles } from '../../../../../content/sa-ship-profiles.ts';
import { saCatalog } from '../../sa-catalog.ts';
import { compatibleOrigins } from '../origins.ts';

test('cada perfil usa destino e precursor compatíveis com catálogo SA', () => {
  assert.equal(shipProfiles.length, 4);
  assert.equal(new Set(shipProfiles.map(profile => profile.id)).size, 4);
  for (const profile of shipProfiles) {
    assert.ok(saCatalog.routes.some(route => route.destination === profile.id));
    const precursor = profile.id === 'carrack-advance' || profile.id === 'carrack-balance'
      ? 'epheria-caravel' : 'epheria-galleass';
    assert.ok(compatibleOrigins(saCatalog, profile.id).some(origin => origin.id === precursor));
    assert.equal(new URL(profile.source).hostname, 'www.sa.playblackdesert.com');
  }
});

test('perfis preservam alias SA e não inventam números de capacidade', () => {
  assert.match(shipProfile('carrack-volante').advice, /Ascensão/);
  assert.throws(() => shipProfile('invalid'), /desconhecida/);
  for (const profile of shipProfiles) assert.doesNotMatch(profile.summary + profile.advice, /\d/);
});
