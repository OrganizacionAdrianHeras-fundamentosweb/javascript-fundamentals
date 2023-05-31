/*
Spread Operator (operador de expansión)

Su sintaxis es ...
*/

// const numbers = [-12,2,3,23,43,2,3]
// console.log(...numbers); // -12 3 3 23 43 2 3

/*
  Enviar elementos de un array a una función
*/
// const addNumbers = (a,b,c) => console.log(a+b+c);
// let numbersToAdd = [1,2,3];
// addNumbers(...numbersToAdd);

/*
  Añadir un array a otro array
*/
// let users = ['javier','david','rosa','juan','mercedes'];
// let newUsers = ['marta','jaime','laura'];

// users.push(...newUsers)
// users.unshift(...newUsers);
// users.splice(2,0,...newUsers)
// console.log(users);

/*
  Copiar arrays
*/
// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1];
// console.log(arr2);

/*
 Concatenar arrays
*/
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8];

// let arrayConcat = arr1.concat(arr2);
// let arrayConcat = [...arr1,...arr2];
// console.log(arrayConcat);

/*
  Enviar un número indefinido de argumentos a una función
  (parámetros REST)
*/
// const restParams = (...numbers) => {
//   console.log(numbers);
// }

// const arr1 = [1,2,3,4,5,6,7,8];
// restParams(...arr1);

/*
 librería math
*/

// const arr1 = [1,4,-12,5,10]
// console.log(Math.max(...arr1)); // 10
// console.log(Math.min(...arr1)); // -12

/*
  Eliminar elementos duplicados de un array
  . La clase Set elimina los elementos duplicados
*/
const numbers = [-12,2,3,23,43,2,3];
console.log(new Set(numbers)); // -12,2,3,23,43
// pasamos a un array la lista de tipo Set
console.log([...new Set(numbers)]); // [-12, 2, 3, 23, 43]

/*
 Fusionar propiedades de un objeto con otro
*/
const obj1 = {
  prop1: 1,
  prop2: 2
}
const obj2 = {
  ...obj1,
  prop3: 3,
};
console.log(obj2); // {prop1: 1, prop2: 2, prop3: 3}














