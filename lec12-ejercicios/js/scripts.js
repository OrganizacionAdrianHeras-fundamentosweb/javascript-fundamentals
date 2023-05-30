/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola
___, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings.
*/

// let name = prompt('Introduce tu nombre');
// parseando una cadena a entero
// let age = parseInt(prompt('Introduce tu edad'));

// console.log(`Hola ${name} tienes ${age} años y el año que viene tendrás ${age + 1} años`);

/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, 
triángulo, rectángulo, y círculo. En primer lugar, pregunta de qué figura calcular el área, después solicita
los datos que necesites para calcularlo.
  triángulo = b * h / 2
  rectángulo = b * h
  círculo = π * r2 (pi * radio al cuadrado)
*/

// let figure = prompt('Introduce la figura geométrica de la que quieres calcular el área: triangle, rectangle or circle');
// console.log(figure);

// let base;
// let height;
// let radius;

// switch(figure) {
//   case 'triangle':
//     base = prompt('Introduce la base del triángulo');
//     height = prompt('Introduce la altura del triángulo');
//     console.log(`El área del triángulo es: ${Math.round((base * height / 2)*100)/100}`);
//     break;
//   case 'rectangle':
//     base = prompt('Introduce la base del rectángulo');
//     height = prompt('Introduce la altura del rectángulo');
//     console.log(`El área del rectángulo es ${Math.round(base*height*100)/100}`);
//     break;
//   case 'circle':
//     radius = prompt('Introduzca el radio del círculo');
//     console.log(`El área del círculo es ${Math.round((Math.PI * Math.pow(radius,2))*100)/100}`);
//     break;
//   default:
//     console.log('La figura geométrica no es válida');
// }

/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese
número con el mensaje "es par" o "es impar" si el número es 5 el resultado será:
  1 - es impar
  2 - es par
  3 - es impar
  4 - es par
  5 - es impar
*/

// let num = parseInt(prompt('Introduce un número'));

// for(let i = 1; i<=num; i++) {
//   if(i%2 == 0) {
//     console.log(`${i} - es par`);
//   } else {
//     console.log(`${i} - es impar`);
//   }
// }

/*
4 - Escribe un programa que pida un número enetero mayor que 1 y que escriba si el número primo o no.
  Un número primo es aquel que solo es divisible por sí mismo y la unidad.
*/

// let num = parseInt(prompt('Introduce un número'));
// let divisores = 0;

// if(num === 1) console.log('El número no es válido');
// else {
//   for(let i=2; i<=num; i++) {
//     if(num % i == 0) {
//       console.log(`${num} / ${i} = ${num/i}`);
//       divisores++;
//     }
//   }

//   if(divisores === 1) console.log(`${num} es primo`);
//   else console.log(`${num} no es primo`);
// }

/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
  El factorial es el resultado de multiplicar ese número por sus anteriores hasta
  la unidad.

  !5 = 5*4*3*2*1 = 120
*/

// let num = parseInt(prompt('Introduce un número'));
// let result = 1;

// for(let i=num; i>=1; i--) {
//   result *= i;
// }

// console.log(`${num}! es ${result}`);

/*
6 - Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.
*/

// let suma = 0;
// let cont = 0;

// while(suma <= 50) {
//   suma += parseInt(prompt(`Introduce un numero para añadir a la suma [${suma}]`));
//   cont++;
// }
// console.log(`La suma total es de ${suma}`);
// console.log(`El total de números introducidos es ${cont}`);

/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares,
ambos estarán vacíos. Depués multiplica cada uno de los números del primer array por un número
aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si
es impara en el array de impares. Muestra por consola:
  - la multiplicación que se produce junto con su resultado con el
  formato 2 x 3 = 6
  - en el array de pares e impares.
*/

// let numbers = [3,43,21,20,56];
// let pares = [];
// let impares = [];

// for(const number of numbers) {
//   const random = Math.round(Math.random()*9+1);
//   const result = number * random;
  
//   console.log(`${number} * ${random} = ${result}`);

//   if(result % 2 == 0) pares.push(result);
//   else impares.push(result);
// }

// console.log(`pares: ${pares}`);
// console.log(`impares: ${impares}`);

/*
8 - Dado un array de letras, solicita un número de DNI y calcula que
letra le corresponde. El número no puede ser negativo ni tener más de 8
dígitos. La posición de la letra es el resultado del módulo del número
introducido entre 23.
*/

// const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N',
// 'J','Z','S','Q','V','H','L','C','K','E','T'];

// const dni = prompt('Introduce tu DNI');

// if(dni.length == 8 && parseInt(dni) > 0) {
//   let pos = dni%23;
//   console.log(`Tu dni completo ${dni}${letras[pos]}`);
// }

/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de
consonantes, vocales y longitud de la palabra.
*/
// const palabra = prompt('Introduce una palabra').toLowerCase();
// let consonantes = 0;
// let vocales = 0;

// for(const letra of palabra) {
//   if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o'
//     || letra == 'u') vocales++;
//   else consonantes++;
//   console.log(letra);
// }

// console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras`);

/*
10 - Dado que un array que contiene ['azul','amarillo','rojo','verde','rosa'] determinar si un color
introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

const colors = ['azul','amarillo','rojo','verde','rosa'];
const color = prompt('Introduce un color').toLowerCase();

if(colors.includes(color)) {
  console.log('Tu color se encuentra en el array');
} else {
  console.log('Tu color no está definido');
}









