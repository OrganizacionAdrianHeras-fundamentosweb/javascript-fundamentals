/*Strings*/
let cadena = "Hola Mundo";

/*PROPIEDADES*/

// length -> Devuelve la longitud de la cadena
console.log(cadena.length); // 10

/*
  Métodos
  Todos los métodos devuelven una cadena nueva, la cadena original 
  no será modificada.
*/

// charAt() 
// [] -> 
// retorna el caracter de un índice en específico.
console.log(cadena.charAt(1)); // o
console.log(cadena[1]); // o

// toUpperCase() -> Deveuleve la cadena en mayúsculas
console.log(cadena.toUpperCase()); // HOLA MUNDO
console.log(cadena); // Hola mundo

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus); // HOLA MUNDO

// toLowerCase() -> Devuelve la cadena en minúsculas
console.log(cadena.toLowerCase()); // hola mundo
console.log(cadena); // Hola mundo

/*
  indexOf(string) -> Devuelve la posición en la que se encuentra
  el string, si no lo encuentra devuelve -1
*/
console.log(cadena.indexOf("Mundo")); // 5
console.log(cadena.indexOf("o")); // 1
console.log(cadena.indexOf("i")); // -1

/*
  replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de
  la cadena que le digamos y pone el valor nuevo.
*/
console.log(cadena.replace("Mundo", "Youtube")); // Hola Youtube
console.log(cadena.replace(/\s+/,"")); // HolaMundo
console.log(cadena.replace(/[o]/g,"e")); // Hela Munde

/*
  substring(inicio [,fin]) -> Extrae los caracteres desde inicio
  hasta fin (el final no se incluye). En donde el parámetro
  incio y fin no pueden ser valores negativos.

  Si no se incluye el fin extrae hasta le final.
*/
console.log(cadena.substring(3)); // a Mundo
console.log(cadena.substring(3, 7)); // a Mu

/*
  slice(inicio [,fin]) -> Igual que substring pero admite valores
  negativos, si ponemos valores negativos empezará desde atrás.

  Si no se incluye el fin, se extrae fasta el final
    (2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos
    no lo considera.
*/
console.log(cadena.slice(2)); // la Mundo
console.log(cadena.slice(-3)); // ndo
console.log(cadena.slice(0, -6)); // Hola
console.log(cadena.slice(0, -2)); // Hola Mun

/*
  trim() -> Elimina los espacios al inicio y al final de la cadena
*/
let cadena2 = "              Hola youtube, estamos trabajando con cadenas     ";
console.log(cadena2.trim()); // Hola yotube, estamos trabajando con cadenas

/*
  startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. 
  Devuelve true o false.
*/
console.log(cadena.startsWith("H")); // true
console.log(cadena.startsWith("h")); // false
console.log(cadena.startsWith("Hola")); // true
console.log(cadena.startsWith("M", 5)); // true

/*
  endsWith(valor [,longitud])) -> Sirve para saber si la cadena termina con ese valor.
  Devuelve true o false.
*/
console.log(cadena.endsWith("o")); // true
console.log(cadena.endsWith("O")); // false
console.log(cadena.endsWith("Mundo")); // true
console.log(cadena.endsWith("Mund", 9)); // true
console.log(cadena.endsWith("a", 4)); // true

/*
  includes(valor [,inicio]) -> Igual que indexOf pero devuelve true o false
*/
console.log(cadena.includes("n")); // true
console.log(cadena.includes("a", 5)); // false
console.log(cadena.includes("a", 3)); // true

/*
  repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/
let cadena3 = "Hola";
console.log(cadena3.repeat(3)); // HolaHolaHola
console.log('r'.repeat(4)); // rrrr


/*Template Strings*/
let nombre = "Juan";
let apellido = "Gómez";
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ". Tienes " + edad + " años.");
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años`);
