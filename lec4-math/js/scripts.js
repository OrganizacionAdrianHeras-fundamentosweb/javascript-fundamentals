/* 
  Objeto Math
  - Es un objecto estático, lo que significa que debemos usar
    su nombre para utilizarlo.
                

  Propidades:
    . Math.E
    . Math.PI

  Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    Math.sqrt(x) Devuelve la raíz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al género más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/

console.log(Math.E);
console.log(Math.PI);

let num = -5;
let num2 = 5.12;
let num3 = 5.9;

console.log(Math.abs(num)); // 5
console.log(Math.ceil(num2)); // 6
console.log(Math.floor(num3)); // 5
console.log(Math.pow(3, 2)); // 9
// aleatorio del 0 al 5
console.log(Math.round(Math.random()*5));
// aleatorio del 3 al 6
// console.log(Math.round());
console.log(Math.round(Math.random()*3 + 3));

// Devuelve tres posibles valores: -1 | 0 | 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(6)); // 1
console.log(Math.sign(0)); // 0

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.41421






