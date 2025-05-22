import { sum } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('1 tambah 1 mengembalikan 2', () => {
    assert.strictEqual(sum(1, 1), 2);
});

test('10 tambah -2 mengembalikan 8', () => {
    assert.strictEqual(sum(10, -2), 8);
});

test('-10 tambah 2 mengembalikan -8', () => {
    assert.strictEqual(sum(-10, 2), -8);
});

test('-1 tambah -1 mengembalikan -2', () => {
    assert.strictEqual(sum(-1, -1), -2);
});

test('2 tambah "abc" mengembalikan "2abc"', () => {
    assert.strictEqual(sum(2, 'abc'), '2abc');
});

test('"abc" tambah 2 mengembalikan "abc2"', () => {
    assert.strictEqual(sum('abc', 2), 'abc2');
});

test('"abc" tambah "lll" mengembalikan "abclll"', () => {
    assert.strictEqual(sum('abc', 'lll'), 'abclll');
});