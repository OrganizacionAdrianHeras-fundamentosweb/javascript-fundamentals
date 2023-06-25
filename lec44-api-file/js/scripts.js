/*
  API File
    Esta API nos sirve para leer archivos que el usuario cargue
    en la web. Se pueden cargar desde un input de tipo file o 
    desde el obejto DataTrasnfer de la API Drag&Drop.

    La interfaz más utilizada para intenar con ella es
    FileReader
    https://developer.mozilla.org/en-US/docs/Web/API/FileReader
*/

const fileInput = document.getElementById('file');
// const img = document.getElementById('img');
const images = document.getElementById('images');
const text = document.getElementById('text');

// Carga de un archivo de texto
// fileInput.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   const fileReader = new FileReader();
//   fileReader.readAsText(file);

//   fileReader.addEventListener('load', (e) => {
//     text.textContent = e.target.result;
//   });
// });

// Carga de una imágen
// fileInput.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(file);

//   fileReader.addEventListener('load', (e) => {
//     img.setAttribute('src', e.target.result);
//   });
// });

// Carga de varias imágenes
fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  const fragment = document.createDocumentFragment();
  let cont = 0;
  for(const file of files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    const img = document.createElement('IMG');
    img.setAttribute('alt', `img-${++cont}`);
    fragment.append(img);

    fileReader.addEventListener('load', (e) => {
      img.setAttribute('src', e.target.result);
    });
  }

  if(images.children.length > 0) Array.from(images.children).forEach(element => element.remove());
  images.append(fragment);
});












