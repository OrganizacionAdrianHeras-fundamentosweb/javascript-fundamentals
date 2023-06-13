/*
Object.values() : Devuelve un arreglo con los valores del objeto.
Object.keys() : Devuelve un arreglo con las claves del objeto.
*/

const form = document.getElementById('form');
const button = document.getElementById('submitButton');
const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

const formIsValid = {
  name: false,
  email: false,
  gender: false,
  terms: false,
}

form.addEventListener('submit', (e) => {
  console.log('entro evento submit')
  e.preventDefault();
  validateForm();
});

name.addEventListener('change', (e) => {
  formIsValid.name = e.target.value.trim().length > 0;
});

email.addEventListener('change', (e) => {
  formIsValid.email = e.target.value.trim().length > 0;
});

gender.addEventListener('change', (e) => {
  formIsValid.gender = e.target.checked;
});

terms.addEventListener('change', (e) => {
  formIsValid.terms = e.target.checked;
  e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
});

const validateForm = () => {
  const formValidValues = Object.values(formIsValid);
  const cond = formValidValues.findIndex((e) => e == false);
  if(cond == -1) form.submit();
  else alert('Form invalid');
};



