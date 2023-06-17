/*
  API WebStorage
    Los dos mecanismos en el almacenamiento web son lo siguientes:
      sessionStorage mantiene un área de almacenamiento separada para
      cada origen que está disponible mientras dure la sesión de la 
      página (mientras el navegador esté abierto, inclyendo recargas
      de página y restablecimientos).

      localStorage hace lo mismo, pero persiste incluso cuando el
      navegador se cierre y se reabra.

    Ambos funcionan con clave:valor y tienen los siguiente métodos
      clear() -> elimina todos los pares clave:valor
      setItem() -> asigna un clave:valor
      getItem() -> recibe como parámetro la clave de la que queremos el valor
      removeItem() -> recibe como parámetro la clave del item que vamos a eliminar
*/

const form = document.getElementById('form');
const keys = document.getElementById('keys');
const infoValue = document.getElementById('infoValue');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  /*
    Form de obtener valor del formulario

      -- a traves del elemento form
      console.log(form.key.value);
      console.log(form.value.value);

      -- a traves del formData
      const formData = new FormData(form);
      console.log(formData.get('key'));
      console.log(formData.get('value'));

      -- a traves del evento
      console.log(e.target.key.value);
      console.log(e.target.value.value);
  */

  // const person = {
  //   name: 'Rbard',
  //   email: 'rbard@gmail.com',
  // }

  /* 
    Al sessionStorage no se le puede pasar un objeto, solamente texto,
    por lo que convertimos el objeto a un texto form formato JSON
  */
  // sessionStorage.setItem('name', JSON.stringify(person));

  const formData = new FormData(form);
  const key = formData.get("key");
  const value = formData.get("value");

  // sessionStorage.setItem(key, value);
  localStorage.setItem(key, value);
  keys.innerHTML += `<option value="">${key}</option>`;

  /*
    reset() -> permite vaciar los campos del formulario
   */
  form.reset();
});

keys.addEventListener('change', (e) => {
  // const value = sessionStorage.getItem(keys.children[e.target.selectedIndex].textContent);
  const value = localStorage.getItem(keys.children[e.target.selectedIndex].textContent);
  infoValue.textContent = value;
});

// sessionStorage.clear();
// localStorage.clear();
// sessionStorage.removeItem('name');
// localStorage.removeItem('name');
