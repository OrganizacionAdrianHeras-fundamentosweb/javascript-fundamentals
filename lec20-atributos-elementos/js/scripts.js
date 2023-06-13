/*
Atributos
  element.getAttribute('attribute')
  element.setAttribute('attribute', value);
  element.removeAttribute('attribute');

  Clases
  element.classList.add('class','class',...)
  element.classList.remove('class','class',...)
  element.classList.contains('class')
  element.classList.replace('oldClass', newClass)
  element.classList.toggle('class'[,force])

atributos directos
  id
  value
  innerHTML
  textContent
  style
*/

const title = document.getElementById('title');
const nombre = document.getElementById('lname');

// console.log(name.getAttribute('type'));
// nombre.setAttribute('type', 'password');

// title.classList.add('main-title', 'other-title');
// title.classList.remove('title');

// if(title.classList.contains('title')) console.log('Title tiene la clase title');
// else console.log('Title no tiene la clase title');

// title.classList.replace('title', 'main-title')

// console.log(title);
// console.log(nombre);

// console.log(title.id);
console.log(title.id);

/*
COge solo texto, es decir si hay etiquetas dentoo el solo cogerá el contenido que
es texto plano.
*/
console.log(title.textContent);

/*
  Le da igual que haya etiquetas dentro del elemento, puesto que coge
  el contenido total junto con las etiquetas.
*/
console.log(title.innerHTML);
/*
  Obtiene el valor del input
*/
console.log(nombre.value);





