import { test, expect } from 'vitest';
import { elevarAoQuadradoComFor, elevarAoQuadradoComForEach } from '../ex01';

const input = [3, 5, 7, 3, 8, 9, 1];
const expected = [9, 25, 49, 9, 64, 81, 1];

test('1.1 Deve elevar ao quadrado usando "for"', () => {
  expect(elevarAoQuadradoComFor(input)).toEqual(expected);});

test('1.2 Deve elevar ao quadrado usando "forEach"', () => {
    expect(elevarAoQuadradoComForEach(input)).toEqual(expected);
});