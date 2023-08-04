/* Condicional simple */
let num = 5;
let num1 = 5;
let num2 = 5;

// la llaves son necesarias siempre y cuando este abarque más
// de una linea de código
/*
  if(num > 0) console.log(`${num} es mayor que 0`);
  if(num > 0) {
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);
  }
*/

/* Condicional compuesto */
/*
  if(num > 0) {
    console.log(`${num} es mayor que 0`);
  } else {
    console.log(`${num} es menor o igual que 0`);
  }
*/

/* Condicional múltiple */
/*
  if(num > 0) {
    console.log(`${num} es mayor que 0`);
  } else if(num < 0) {
    console.log(`${num} es menor que 0`);
  } else {
    console.log(`${num} es igual a 0`);
  }
*/

/* Operadores lógicos */
/* && and */
/* || or */

/*
  if(num1 > 0 || num2 > 0) {
    console.log(`${num1} o ${num2} son mayores que 0`);
  }
*/

if(num1 > 0) {
  if(num2 > 0) {
    console.log(`${num1} y ${num2} son mayores que 0`);
  } else if(num2 < 0) {
    console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
  } else {
    console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
  }
} else if(num1 < 0) {
  if(num2 > 0) {
    console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`);
  } else if(num2 < 0) {
    console.log(`${num1} y ${num2} son menores que 0`);
  } else {
    console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
  }
} else {
  if(num2 < 0) {
    console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
  } else if(num2 > 0) {
    console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
  } else {
    console.log(`${num1} y ${num2} son iguales a 0`);
  }
}

let word = "Hola mundo";

if(word.length > 4) {
  console.log(`${word} tiene más de 4 letras`);
} else if(word.length < 4) {
  console.log(`${word} tiene menos de 4 letras`);
} else {
  console.log(`${word} tiene 4 letras`);
}

let respuesta = true;

if(respuesta == true) console.log(`${respuesta} tiene el valor true`);
if(respuesta == false) console.log(`${respuesta} tiene el valor false`);

if(respuesta) console.log(`${respuesta} tiene el valor true`);
if(!respuesta) console.log(`${respuesta} tiene el valor false`);

/*
 The nullish Coalescing Operator (??)
*/
let numbers = [1,2];
console.log(numbers ?? 'hola'); // [1,2]
numbers = null;
console.log(numbers ?? 'hola'); // hola
numbers = []
console.log(numbers ?? 'hola'); // hola

let obj = {edad: 1}
console.log(obj ?? 'hola'); // {edad: 1}
obj = null
console.log(obj ?? 'hola'); // hola
obj = {}
console.log(obj ?? 'hola'); // hola
