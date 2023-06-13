
const button = document.getElementById('button');
const name = document.getElementById('name');
const email = document.getElementById('email');
const course = document.getElementById('course');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');
const form = document.getElementById('form');

const formIsValid = {
  name: false,
  email: false,
  course: false,
  gender: false,
  terms: false,
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validForm();
});

name.addEventListener('change', (e) => {
  const regExName = /^[a-zA-Z]+$/;
  formIsValid.name = regExName.test(e.target.value);
});

email.addEventListener('change', (e) => {
  const regExEmail = /^[\w]+@(gmail\.com)$/;
  formIsValid.email = regExEmail.test(e.target.value);
});

course.addEventListener('change', (e) => {
  formIsValid.course = e.target.value.length > 0;
});

gender.addEventListener('change', (e) => {
  formIsValid.gender = e.target.checked;
});

terms.addEventListener('change', (e) => {
  e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
  formIsValid.terms = e.target.checked;
});

const validForm = () => {
  const isValid = Object.values(formIsValid).every((v) => v == true);
  if(isValid) form.submit();
  else alert('Invalid Form!')
};

