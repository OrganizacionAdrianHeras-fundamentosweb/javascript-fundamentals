/*
Fecch API
. Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, 
como peticiones y respuestas.
. Tambíen provee un método global fetch() que proporciona una forma fácil y lógica
de obtener recursos de forma asíncrona por la red.
. Por defecto trabaja con el método HTTP GET 
. Está basado en promesas, por lo cual tiene un response y un reject internos.
    Responde tiene varios métodos
    arrayBuffer(): Archivos binarios en bruto (mp3, pdf,jpg, etc). Se utiliza cuando
    se necesita manipular el contenido del archivo.
    blob(): Archivos binarios en bruto(mp3, pdf, jpg, etc). Se utiliza cuando no se necesita
    manipular el contenido y se va a trabajar con el archivo directamente.
    clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero
    almacenado en una variable diferente.
    formData(): Se utiliza para leer los objetos formData
    json(): Convierte los archivos json en un objeto de JavaScript
    text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

Comprobación de soporte FETCH
  if(window.fetch) console.log('FETCH OK');
  else console.log('FETCH NOT WORKS!);
*/

const button = document.getElementById('button');

// res = response = respuesta
button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then((res) => res.json())
    .then((res) => {
      const list =  document.getElementById('list');
      if(list.children.length == 0) {
        const fragment = document.createDocumentFragment();
        for(let data of res) {
          const elemLi = document.createElement('LI');
          elemLi.textContent = `${data.name} - ${data.email}`
          fragment.append(elemLi);
        }
        list.append(fragment);
      }
    });
});

