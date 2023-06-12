/*
Fetch API
blob() -> Binary Long Object
URL -> Objeto nativo de javascript, cuyo método createObjectURL permite coger el objeto BLOB
       para luego convertirlo en una URl y pode ver el contenido de este archivo.
*/

const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
  fetch('./assets/imgs/dog.webp')
  .then((res) => res.blob())
  .then((objBlob) => 
    document.getElementById('img').src = URL.createObjectURL(objBlob)
  );
});

buttonPDF.addEventListener('click', () => {
  fetch('./assets/pdfs/demo.pdf')
  .then((res) => res.blob())
  .then((objBlob) => 
    document.getElementById('pdf').href= URL.createObjectURL(objBlob)
  );
});



