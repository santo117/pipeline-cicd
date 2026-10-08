const test = require('node:test');
const assert = require('node:assert');
const { sumar, restar, multiplicar, dividir } = require('../src/calculadora');

test('sumar dos números', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('restar dos números', () => {
  assert.strictEqual(restar(10, 4), 6);
});

test('multiplicar dos números', () => {
  assert.strictEqual(multiplicar(3, 4), 12);
});

test('dividir dos números', () => {
  assert.strictEqual(dividir(10, 2), 5);
});

test('dividir entre cero lanza un error', () => {
  assert.throws(() => dividir(1, 0), /dividir entre cero/);
});
