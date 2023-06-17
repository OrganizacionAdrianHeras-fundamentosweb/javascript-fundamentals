/*
  API drag & drop:
  Existen dos principales en esta API, el objeto a arrastrar y la zona
  donde vamos a dejarlo.

  Para contactarlo estas acciones tenemos varios eventos de cada una
  de las parte:
    Objeto a arrastrar:
      dragstart: se dispara al comenzar a arrastrar
      drag: se dispara mientras arrastramos
      dragend: se dispara cuando soltamos el objeto
    
    Zona de destino:
      dragenter: se dispara cuando el objeto se mueve en la zona de
        destino.
      dragover: se dispara cuando el bojeto se mueve sobre la
        zona de destino.
      drop: se dispara cuando soltamos el objeto en la zona de
        destino:
      dragleave: se dispara cuando el objeto sale de la zona de
        destino.
*/

const smile = document.getElementById('smile');
const dropZone = document.getElementById('drop-zone');

// smile.addEventListener('dragend', (e) => {
  // console.log('Drand');
// });

// dropZone.addEventListener('dragover', (e) => {
//   e.preventDefault();
//   console.log('Drag over');
// });

// dropZone.addEventListener('drop', (e) => {
//   e.preventDefault();
//   console.log('Drop');
// });

dropZone.addEventListener('dragleave', (e) => {
  console.log('Drag leave');
});


