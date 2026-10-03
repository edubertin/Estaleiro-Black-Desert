import assert from 'node:assert/strict';
import test from 'node:test';
import { createImagePreparer } from '../../asset-preparation.ts';

test('preparação compartilha download concorrente e preserva recurso pronto no cache', async () => {
  let attempts = 0;
  const prepare = createImagePreparer(async () => { attempts += 1; });
  await Promise.all([prepare('/ship'), prepare('/ship')]);
  await prepare('/ship');
  assert.equal(attempts, 1);
});

test('falha de imagem permite nova tentativa sem contaminar cache', async () => {
  let attempts = 0;
  const prepare = createImagePreparer(async () => {
    attempts += 1;
    if (attempts === 1) throw new Error('Rede indisponível');
  });
  await assert.rejects(prepare('/ship'), /Rede indisponível/);
  await prepare('/ship');
  assert.equal(attempts, 2);
});

test('imagem travada expira e uma resposta antiga não substitui tentativa nova', async () => {
  let completeOld: (() => void) | undefined;
  let attempts = 0;
  const prepare = createImagePreparer(() => {
    attempts += 1;
    return attempts === 1 ? new Promise(resolve => { completeOld = resolve; }) : Promise.resolve();
  }, 10);
  await assert.rejects(prepare('/ship'), /Tempo de preparação/);
  await prepare('/ship');
  completeOld?.();
  await prepare('/ship');
  assert.equal(attempts, 2);
});
