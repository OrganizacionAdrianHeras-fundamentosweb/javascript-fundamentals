/*
  - Son estructuras que nos permiten almacenar varios datos y agruparlos.
  - Se pueden llamar con cualquier tipo de dato válido en Javascript y deben ir
  separados por comas.
  - Se pueden mezclar tipos de datos, pero no es recomendable.
  - Se declaran con llaves cuadradas o corchetes []
  - Pueden declararse vacíos o con un contenido ya establecido
  - Pueden añadirse o eliminarse elementos en el momento que queramos.

  let array = [] // Array vacío
  let numeros = [1,2,3,4,5] // Array con contenido inicial
*/

let numeros = [1,2,3,4,5,6,1];
let palabras = ['hola','estamos','en','Youtube'];

console.log(numeros); // [1,2,3,4,5]
console.log(numeros[5]); // 1
console.log(numeros[0] + numeros[1]); // 3
console.log(palabras[1]); // estamos
console.log(palabras[1].length); // 7
console.log(`La palabra ${palabras[3]} tiene ${palabras[3].length} letras`);
let booleans = [true, true, false];

/*
  Arrays - Propiedad
    Array.length - devuelve el número de posiciones que contiene el array
*/

console.log(numeros.length); // 5

/*
  Arrays - Métodos
    Array.isArray() - Devuelve true si la variable es un array
*/

let numero = 4;
console.log(Array.isArray(numero)); // false
console.log(Array.isArray(numeros)); // true

/*
  Eliminar un elemento
    .shift() - Elimina el primer elemento del array y devuelve ese elemento
    .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

// console.log(numeros); // [1,2,3,4,5,6]
// let deleteElement = numeros.shift();
// console.log(`deleteElement shift - ${deleteElement}`); // 1

// console.log(numeros); // [2,3,4,5,6]
// let deleteElement = numeros.pop();
// console.log(`deleteElement pop - ${deleteElement}`); // 6
// console.log(numeros); // [2,3,4,5]

/*
  Añadir elementos
    .push(element1, element2, ...) - Añade uno o más elementos al final del array
    y devuelve la nueva longitud.
    .unshift(element1, element2, ...) - Añade uno o más elementos al comienzo del
    array y devuelve la nueva longitud.
*/

// console.log(numeros); // [1,2,3,4,5,6]
// let newLength =  numeros.push(9);
// console.log(`newLength push - ${newLength}`); // 7
//console.log(numeros); // [1,2,3,4,5,6,9]

// console.log(numeros); // [1,2,3,4,5,6]
// let newLength = numeros.unshift(0);
// console.log(`newLength unshift - ${newLength}`); // 7
// console.log(numeros); // [0,1,2,3,4,5,6]

/*
  .indexOf() - Devuelve el primer índice del elemento que coincida con
  el valor especificado, o -1 si ninguno es encontrado.
*/

console.log(numeros.indexOf(1)); // 0
console.log(numeros.indexOf(0)); // -1

/*
  .lastIndexOf() - Devuelve el último índice del elemento que coincida
  con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log(numeros.lastIndexOf(1)); // 6
console.log(numeros.lastIndexOf(0)); // -1

/*
  .reverse() - Invierte el orden de los elementos del array
*/

// console.log(numeros); // [1,2,3,4,5,6,1]
// numeros.reverse();
// console.log(numeros); // [1,6,5,4,3,2,1]

/*
  .join('separador') - Devuelve un string con el separador que
  indiquemos, por defecto son comas.
*/

console.log(numeros); // [1,2,3,4,5,6,1]
let arrayString = numeros.join(" ");
console.log(arrayString); // 1 2 3 4 5 6 1
console.log(numeros.join("-")); // 1-2-3-4-5-6-1

/*
  .splice(a,b,items) - Cambia el contenido de un array eliminado
  elementos existentes y/o agregando nuevos elementos.
  a - Indice de inicio
  b - Número de elementos (opcional)
  items - Elementos a añadir en el caso de que se añadan (opcional)
*/

// console.log(numeros); // [1,2,3,4,5,6,1]
// let deleteElements = numeros.splice(3); - Elimina desde la posición 3 hasta el final
// console.log(deleteElements); // [4,5,6,1]
// console.log(numeros); // [1,2,3]

// let deleteElements = numeros.splice(2, 3); - Elimina desde la posición el número de valores que le indiquemos
// console.log(deleteElements); // [3,4,5]
// console.log(numeros); // [1,2,6,1]

// let deleteElements = numeros.splice(2,2,10,11); - Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade
//                                                  los valores de items a partir de la posición a.
// console.log(deleteElements); // [3,4]
// console.log(numeros); // [1,2,10,5,6,1]

// let deleteElements = numeros.splice(2, 0, 11, 54); - Si b vale 0, añade los elementos a partir de la posición a y no elimina ninguno.
// console.log(deleteElements); // []
// console.log(numeros); // [1,2,11,54,3,4,5,6,1]

/*
  .slice(a,b) - Extrae elementos de un array desde el índice a hasta el indice b. Si no existe
  b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

// let newNumeros = numeros.slice(); - obtiene una copia extacta de los elementos del array
// console.log(newNumeros); // [1,2,3,4,5,6,1]
// console.log(numeros); // [1,2,3,4,5,6,1]

// let newNumeros = numeros.slice(2); - obtiene un nuevo array pero contando dede la posición 2
// console.log(newNumeros); // [3,4,5,6,1]
// console.log(numeros); // [1,2,3,4,5,6,1]

// let newNumeros = numeros.slice(2,4); - obtiene un nuevo array pero contando de la posición 2 hasta
//                                        la posición 3
// console.log(newNumeros); // [3,4]
// console.log(numeros); // [1,2,3,4,5,6,1]

