const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', (e) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(getPosition, error, options);

});

/*
enableHightAccuracy -> en caso el dispositivo tengas más opciones de geolocalización
                       como el móbil que tiene GPS, entonces los va a utilizar.
timeout -> determina el tiempo que estalecemos para que nos devuelva la posición
maximunAge -> la duración que permitimos tener algo en cache, como por ejemplo la posición
*/
const options = {
  enableHightAccuracy: true,
  timeout: 5000,
  maximunAge: 0,
}
const getPosition = (position) => {
  console.log(position);
};

const error = (error) => console.log(error);

