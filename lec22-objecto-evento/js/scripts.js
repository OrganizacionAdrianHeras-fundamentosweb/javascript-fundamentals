/*
El objeto global en Javascript en windows.
Es por ello, que no es necesario declarar la palabra window cuando usas
los métodos del mismo.
Por ejemplo:
. window.addEventListener('click', () => console.log('hiciste click'));
    es similar a
  addEventListener('click', () => console.log('hiciste click'));
. window.alert('hola mundo'); 
    es similar a 
  alert('hola mundo');
*/

const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

// input.addEventListener('keyup', (e) => {
  // console.log(input.value);
  // console.log(e.explicitOriginalTarget.attributes[0].nodeValue);
// });

// button.addEventListener('click', (e) => {
//   console.log(e.target);
// });

// const gallery = document.getElementById('gallery');
// gallery.addEventListener('click', (e) => {
//   const content = e.target.textContent;
//   if(content.length == 1) {
//     console.log(e.target.classList.add('red'));
//   }
// });

const link = document.getElementById('link');

link.addEventListener('click', (e) => {
  /*
   preventDefault() -> Evitar el comportamiento por defecto del evento
   asociado al elemento HTML
  */
  e.preventDefault();

  /*
   Forzamos la ejecucion de un evento.
  */
  button.click();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('el formulario se ha enviado')
});

button.addEventListener('click', () => {
  // input.value = 'Has hecho click';
  input.placeholder = 'Has hecho click';
});






