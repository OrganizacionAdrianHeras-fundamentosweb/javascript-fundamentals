const form = document.getElementById('form');
const result = document.getElementById('result');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const number1 = Number.parseInt(formData.get('number1'));
  const number2 = Number.parseInt(formData.get('number2'));
  if(number1 && number2) {
    result.textContent = `${number1} + ${number2} es ${number1 + number2}`
    e.target.reset();
  }
});
