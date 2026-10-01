import { test } from 'node:test';
import assert from 'node:assert/strict';
import { adjustQuantity } from '../../quantity-controls.ts';

test('quantity buttons distinguish unrecorded stock from explicit zero', () => {
  assert.equal(adjustQuantity(null, -1), null);
  assert.equal(adjustQuantity(null, 1), 1);
  assert.equal(adjustQuantity(1, -1), 0);
  assert.equal(adjustQuantity(0, -1), 0);
});

test('quantity buttons permit excess stock and respect safe integer ceiling', () => {
  assert.equal(adjustQuantity(100, 1), 101);
  assert.equal(adjustQuantity(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER);
  assert.equal(adjustQuantity(Number.MAX_SAFE_INTEGER, -1), Number.MAX_SAFE_INTEGER - 1);
});
