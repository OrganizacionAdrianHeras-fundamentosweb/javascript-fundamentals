const button = window.document.getElementById('button');

/*
Objeto window - Es el objeto gobal, de él descienden todos
los objetos
  alert();
  prompt();
  confirm();
*/

// window.addEventListener('click', (e) => {
  // console.log(e);
// });

// window.addEventListener('load', (e) => {
  // console.log(e);
// });

// window.addEventListener('scroll', (e) => {
  // console.log(e);
// });

// alert('Hola');
// window.alert('Hola2');

// const name = prompt('Ingrese su nombre');
// const name = window.prompt('Ingrese su nombre');

// const resp = confirm('Acepta ?');
// const resp = window.confirm('Acepta ?');
// if(resp) console.log('El usuario aceptó');
// else console.log('El uusuario no aceptó');

/*
Objeto console - Es el objeto que contiene la consola del
navegador
  https://developer.mozilla.org/es/docs/Web/API/Console
  console.log(); -> permite mostrar un valor por consola
  console.dir(); -> permite que el valor mostrado por consola
                    se pueda desplegar.
  console.error(); -> permite mostrar errores por consola
  console.table(); -> permite mostrar el valor por consola, en forma de tabla
*/

const person = {
  name: 'sue',
  age: 30,
  email: 'sue@gmail.com'
}

// console.log(button);
// window.console.log(button);
// console.dir(button);
// window.console.dir(button);
// console.error('error');
// window.console.error('error');
// console.table(person);
// window.console.table(person)
// console.table([person]);
// window.console.table([person]);

/*
Objeto location - Es el objeto que contiene la barra de 
direcciones
  https://developer.mozilla.org/es/docs/Web/API/Location
  location.href -> devuelve la dirección de la pagina en donde nos econtramos
  location.protocol -> devuelve el protocolo de la derección de la página
  location.host -> devuelve el nombre del host de la dirección de la página
  location.pathname -> devuelve el path de la dirección de la página
  location.hash -> devuelve el hash de la dirección de la página
  location.reload() -> permite recargar la pagina
*/

// console.log(location.href);
// console.log(window.location.href);
// console.log(location.protocol);
// console.log(window.location.protocol);
// console.log(location.host);
// console.log(window.location.host);
// console.log(location.pathname);
// console.log(window.location.pathname);
// console.log(location.hash);
// console.log(window.location.hash);
// window.location.reload();

/*
Al asignar un valor distinto al href puedes redirigir a otra página
*/
// location.href = 'https://google.com';

/*
Objeto history - Es el objeto que almacena como historial las páginas que has ido
                 visitando.
  https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_naveagdor
  back() -> Nos redirige a la página anterior en el historial.
  forward() -> Nos redirige a la página posterior en el historial.
  go(n|-n) -> Nos redirige de páginas (anterior o posterior), en el historial.
  length -> muestra cuantas páginas tenemos en el historial.
*/

// window.history.back();
// window.history.forward();
// window.history.go(2);
// window.history.go(-1);
// console.log(window.history.length);

/*
Objeto date
  https://developer.mozilla.org./es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
*/

// const date = new Date();
// const date = new window.Date();
// console.log(date);
// console.log(date.getDay()-1); número que le corresponde al día de la semana 
// (Tomar en cuenta que empieze en o)
// console.log(date.getDate()); // día del mes
// console.log(date.getMonth()); // número que corresponde al mes. (Tomar en cuenta que empize en 0)
// console.log(date.getFullYear()); // número del año

/*
Timers
  Timeout:
  https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalSpace/setTimeout

  setTimeout(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función después
  del delay. Si lo referenciamos mediante una variable/constante podemos pararlo con
  clearTimeout (referencia)

  Interval:
  https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWokerGlabalSpace/setInterval
  
  setInterval(() => {code}, delay-in-miliseconds) - Hace que se jecute la función cada delay 
  milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo
  con clearInterval(referencia)
*/

const saludar = () => {
  console.log('Hola');
}

// window.setTimeout(() => {
//   console.log('Adios');
// }, 3000);

// button.addEventListener('click', () => {
//   // setTimeout(saludar, 3000);
//   setTimeout(() => {
//     console.log('Hola');
//   }, 3000);
// });

// window.clearTimeout(timeout);

// const timeout = setTimeout(() => {
//   console.log('Timeout terminado');
// }, 3000);

// button.addEventListener('click', () => {
//   clearTimeout(timeout);
// });

// const interval = window.setInterval(saludar, 3000);

// let cont = 0;
// const interval = setInterval(() => {
//   console.log(cont);
//   cont++;
// }, 1000);

// button.addEventListener('click', () => {
//   clearInterval(interval);
// });


