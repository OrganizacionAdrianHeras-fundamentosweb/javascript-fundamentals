/*
Eventos de ratón:
click - cuando pulsamos el botón izquierdo del ratón
dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
mouseenter - cuando entramos en la zona que tiene el evento
mouseleave - cuando salimos de la zona que tiene el evento
mousedown - cuando pulsamos y no soltamos el boton izauierdo o derecho del ratón
mouseup - cuando soltamos el boton izquierdo o derecho del ratón
mousemove - cuando movemos el raton

Eventos de teclado:
keydown - cuando pulsamos una tecla
keyup - cuando soltamos una tecla
keypress - cuando pulsamos una tecla y no soltamos

keyup vs keypress: 
  . El evento keypress no lo generan las teclas que no son caracteres, pero Las teclas que 
    son caracteres provocan los eventos keydown y keyup.
  . keypress se activa después del evento keydown. Según la configuración del retraso de escritura,
    puede haber eventos keydown y keypress, pero solo un evento keyup.
*/

const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('box');

// button.addEventListener('click', () => {
//   console.log('click');
// });

// button.addEventListener('dblclick', () => {
//   console.log('double click');
// });

// box.addEventListener('mouseenter', () => {
//   box.classList.replace('red', 'green');
// });

// box.addEventListener('mouseleave', () => {
//   box.classList.replace('green', 'red');
// });

// box.addEventListener('mousedown', () => {
//   console.log('has pulsado el mouse en la caja');
// });

// box.addEventListener('mouseup', () => {
//   console.log('has soltado el mouse en la caja');
// });

// box.addEventListener('mousemove', () => {
//   console.log('estas moviendo el raton en la caja');
// });

// input.addEventListener('keydown', () => {
//   console.log('has pulsado una tecla');
// });

// input.addEventListener('keyup', () => {
//   console.log('has soltado una tecla');
// });

// input.addEventListener('keypress', () => {
//   console.log('estas pulsando una tecla');
// });




