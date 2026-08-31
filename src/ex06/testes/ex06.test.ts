import test from 'node:test';
import assert from 'node:assert/strict';
import { Cachorro, Gato } from '../ex06.js';

test('6. Deve alterar os atributos e executar o método da interface', () => {
  // 1. Instancia os objetos
  const dog = new Cachorro();
  const cat = new Gato();

  // 2. Altera os atributos
  dog.nome = 'Scooby Doo';
  cat.cor = 'laranja';

  // 3. Valida os métodos
  assert.strictEqual(dog.fazerSom(), 'Scooby Doo diz: Au au!');
  assert.strictEqual(cat.cor, 'laranja');
  assert.strictEqual(cat.fazerSom(), 'O gato laranja diz: Miau!');
});