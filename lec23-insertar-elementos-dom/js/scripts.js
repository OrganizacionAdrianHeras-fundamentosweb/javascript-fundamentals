// DOM - Crear e insertar elementos

/*
Crear un elemento: document.createElement(element);
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTMl = código HTMl

Añadir un elemento al DOM: 
  En donde appen() siempre agregará el hijo al último
  parent.appendChild(element);

Fragmentos de código: document.createDocumentFragment();
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves',
'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');

// const itemList = document.createElement('li');
// itemList.textContent = 'Lunes';

// daysList.appendChild(itemList);

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>';

/*
Los documentos fragmentados, permiten ser modificados
varias veces sin afectar el DOM. Para luego al final
puedas setear este fragmento al DOM.
*/
const documentFragment = document.createDocumentFragment();

for(const day of days) {
  /*
  con innerHTML a cada vuelta tenemos que insertar en el DOM
  por lo que se hace pesado
  */
  // daysList.innerHTML += `<li>${day}</li>`;
  const itemList = document.createElement('li');
  itemList.textContent = day;
  documentFragment.appendChild(itemList);
}

daysList.appendChild(documentFragment);

const documentFragment2 = document.createDocumentFragment();
for(const day of days) {
  const selectItem = document.createElement('option');
  selectItem.textContent = day;
  selectItem.setAttribute('value', day.toLowerCase());
  documentFragment2.appendChild(selectItem);
}

daysSelect.appendChild(documentFragment2);







