const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const formData = new FormData(form);

  // console.log(`The heroe's name is ${formData.get('name')}`);
  // console.log(`The heroe's gender is ${formData.get('gender')}`);
  // console.log(`The number of kills is ${formData.get('hometown')}`);

  sendData(form);
});

const sendData = (data) => {
  let xhr;
  if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open('POST', './php/marvel.php');
  const formData = new FormData(data);
  console.log(formData);
  xhr.send(formData);
};


