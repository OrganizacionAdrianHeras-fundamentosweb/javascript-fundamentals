/*
Insertar y eliminar elementos II
  parent .insertBefore(newElement, referenceElement) - Insertar un
  elemento antes del elemento de referencia

  SOPORTE TOTAL
    parent.insertAdjacentElement(position, element);
    parent.insertAdjacentHTML(position, HTML);
    parent.insertAdjacentText(position, text);

  positions:
    beforebegin - Antes de que empiece (hermano anterior)
    afterbegin - Después de que empieze (primer hijo)
    beforeend - antes de que acabe (último hijo)
    afterend - después de que acabe (hermano siguiente)
  
  parent.replaceChild(newChild, oldChild) - Reemplaza
  un hijo por otro.
*/

const list = document.getElementById('list');
const newElement = document.createElement('LI');
newElement.textContent = "I'm a new element";

// list.appendChild(newElement);
// list.insertBefore(newElement, list.firstChild);
// list.insertBefore(newElement, list.children[1]);

// list.insertAdjacentElement('beforebegin', newElement);
// list.firstElementChild.insertAdjacentElement('beforebegin', newElement);
// list.insertAdjacentElement('afterbegin', newElement);
// list.insertAdjacentElement('beforeend', newElement);
// list.insertAdjacentElement('afterend', newElement);
// list.lastElementChild.insertAdjacentElement('afterend', newElement);

// list.firstElementChild.insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.lastElementChild.insertAdjacentText('beforebegin', '<li>Texto</li>')

// list.replaceChild(newElement, list.firstElementChild);

/*
DOM manipulation convenience methods - JQuery Like
https://caniuse.com/#search=jQuery-like

positions:
  parent.before() - Antes de que empiece (hermano anterior)
  parent.prepend() - Después de que empiece (primer hijo)
  parent.append() - Antes de que acabe (último hijo)
  parent.after() - Después de que acabe (hermano siguiente)

  child.replaceWith(newChild)
*/

// list.before(newElement);
// list.firstElementChild.before(newElement);
// list.prepend(newElement);
// list.append(newElement);
// list.after(newElement);
// list.children[1].after(newElement);

// list.children[0].replaceWith(newElement);
// list.lastElementChild.replaceWith(newElement);

/*
Clonar y eliminar elementos
  element.cloneNode(true|false) - Clona el nodo. Si le pasamos
  true clona todo el elemento con los hijos, si le pasamos
  false clona solo el elemento sin hijos.
  element.remove() - Elimina el nodo del DOM
  element.removeChild() - Elimina el nodo hijo del DOM
*/

// console.log(list.cloneNode(true));
// console.log(list.cloneNode(false));

// list.after(list.cloneNode(true));

// const list2 = list.cloneNode(true);
// list2.firstElementChild.replaceWith(newElement);
// list.before(list2);

// list.remove();
// list.removeChild(list.children[0])
// list.firstElementChild.remove();




