import sum from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('2 tambah 3 mengembalikan 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('"a" tambah 3 mengembalikan 0', () => {
  assert.strictEqual(sum('a', 3), 0);
});

test('2 tambah "b" mengembalikan 0', () => {
  assert.strictEqual(sum(2, 'b'), 0);
});

test('"a" tambah "b" mengembalikan 0', () => {
  assert.strictEqual(sum('a', 'b'), 0);
});

test('-1 tambah 3 mengembalikan 0', () => {
  assert.strictEqual(sum(-1, 3), 0);
});

test('3 tambah -1 mengembalikan 0', () => {
  assert.strictEqual(sum(3, -1), 0);
});

test('-2 tambah -5 mengembalikan 0', () => {
  assert.strictEqual(sum(-2, -5), 0);
});