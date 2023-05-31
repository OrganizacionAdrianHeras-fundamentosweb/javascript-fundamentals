/*
Arrays - Métodos II
*/

/*
.from(iterable) - Convierte en array el elemento iterable
*/

// let word = 'Hola mundo';
// console.log(Array.from(word));
// console.log(word.split(''));

/*
.sort([callback]) - Ordena los elementos de un array 
alfabéticamente(valor Unicode), si le pasamos un callback
los ordena en función del algoritmo que le pasemos.
*/

// const letters = ['b','c','z','a'];
// const numbers = [1,8,100,300,3];
// console.log(letters.sort());
// console.log(numbers.sort());
// console.log(numbers.sort((a,b) => a-b));

/*
.forEach(callback(currentValue, [index])) - ejecuta la
función indicada una vez por cada elemento del array.
*/

// const numbers = [12,25,47,84,98];
// numbers.forEach((num) => console.log(num));
// numbers.forEach((num, index) => console.log(`${num} está en la posición ${index}`));

/*
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
*/
// const words = ['HTML','CSS','JavaScript','PHP'];
// console.log(words.some((word) => word.length > 10)); // false
// console.log(words.every((word) => word.length > 3)); // false

/*
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan la condición
y devuelve el nuevo array.
.reduce(callback) - Reduce todos los elementos del array a un único valor.
*/

const numbers = [1,2,3,4,5];

// numbers.map((num) => console.log(num * 2));
// const numbers2 = numbers.map((num) => num * 2);
// console.log(numbers2);

// const numbers2 = numbers.filter((num) => num > 80);
// console.log(numbers2);

console.log(numbers.reduce((a,b) => a+b));

const users = [
  {
    name: 'user 1',
    online: true
  },
  {
    name: 'user 2',
    online: true
  },
  {
    name: 'user 3',
    online: false
  },
  {
    name: 'user 4',
    online: true
  },
  {
    name: 'user 5',
    online: false
  },
  {
    name: 'user 6',
    online: true
  }
]

const usersOnline = users.reduce((cont,user) => {
  if(user.online) cont++;
  return cont;
},0);
console.log(`There are ${usersOnline} users connnected`);















