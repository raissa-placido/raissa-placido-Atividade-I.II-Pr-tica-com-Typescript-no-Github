import { test, expect } from 'vitest';
import { concatenarComJoin } from '../ex02';

const input = ['Arrays', 'com', 'TypeScript'];
const expected = 'Arrays com TypeScript';

test('2. Deve concatenar o array de strings com 1 espaço usando join', () => {
  expect(concatenarComJoin(input)).toBe(expected);
});