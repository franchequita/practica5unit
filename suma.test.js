// suma.test.js
const sumar = require('./suma');

test('debería devolver 4 cuando se suman 2 y 2', () => {
  expect(sumar(2, 2)).toBe(4);
});