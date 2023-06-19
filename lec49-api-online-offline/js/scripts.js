const alert = document.getElementById('alert');

/*
  online -> evento que se activa cuando el navegador ha obtenido acceso a la red
  offline -> evento que se activa cuando el navegador no tiene acceso a al red
*/
addEventListener('online', () => {
  setAlert(1);
});

addEventListener('offline', () => {
  setAlert(0);
});

const setAlert = (status) => {
  alert.classList.remove('alert--offline');
  alert.classList.remove('alert--online');

  status == 0 ? 
    setTimeout(() => {
      console.log(status);
      alert.textContent = 'Ups, It seems you are offline'
      alert.classList.add('alert--offline');
    },100) :
    setTimeout(() => {
      console.log(status);
      alert.textContent = 'You are online again';
      alert.classList.add('alert--online');
    }, 100);
};
