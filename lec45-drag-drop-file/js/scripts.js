
const dropZone = document.getElementById('drop-zone')
const inputFile = document.getElementById('file');

const root = document.documentElement;

dropZone.addEventListener('click', () => {
  inputFile.click();
  initProgressBar();
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drop-zone--active');
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drop-zone--active');
  initProgressBar();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  moveProgressBar();
});

inputFile.addEventListener('change', (e) => {
  moveProgressBar();
});

const initProgressBar = () => {
  root.style.setProperty('--bar-width', 0);
  root.style.setProperty('--bar-transition', 'none');
};

const moveProgressBar = () => {
  root.style.setProperty('--bar-transition', '2s');
  root.style.setProperty('--bar-width', '100%');
};
