const fileInput = document.getElementById('file');
const progress = document.getElementById('progress')

/*
  documentElement -> Permite acceder al elemento root del documento
*/
const root = document.documentElement;

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener('progress', (e) => {
    // console.log(e.loaded / e.total * 100);
    const porc = `${Number.parseInt(e.loaded / e.total * 100)}%`;
    progress.style.width = porc;
    root.style.setProperty('--bar-width', porc);
  });

  fileReader.addEventListener('loadend', (e) => {
    // console.log(e.loaded / e.total* 100);
    const porc = '100%';
    progress.style.width = porc;
    root.style.setProperty('--bar-width', porc);
  });
});
