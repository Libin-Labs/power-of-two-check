import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('recognizes one', () => {
  assert.equal(api.isPowerOfTwo(1), true);
});
test('recognizes powers', () => {
  assert.equal(api.isPowerOfTwo(1024), true);
});
test('rejects non-power', () => {
  assert.equal(api.isPowerOfTwo(12), false);
});
test('zero is not a power', () => {
  assert.equal(api.isPowerOfTwo(0), false);
});
test('negative is not a power', () => {
  assert.equal(api.isPowerOfTwo(-8), false);
});
test('rejects fractional input', () => {
  assert.throws(() => api.isPowerOfTwo(2.5), TypeError);
});
