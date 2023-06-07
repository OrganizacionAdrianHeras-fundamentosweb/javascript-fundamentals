/*
Recorrer el DOM (DOM Traversing)
*/

/*
Padre - parent (Nodo del que desciende)
  - parentNode  - Devuelve el nodo padre (que pueda no ser un elemento)
  - parentElement - Devuelve el nodo elemento padre

  NOTA
  Los nodos de tipo Document y DocumentFragment nunca van a tener
  un elemento padre, parentNode devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
  - childNodes - Devuelve todos los nodos hijos
  - children - Devuelve todos los nodos elementos hijos
  - firstChild - Devuelve el primer nodo hijo
  - firstElementChild - Devuelve el primer nodo elemento hijo
  - lastChild - Devuelve el último nodo hijo
  - lastElementChild - Devuelve el último nodo elemento hijo
  - lastChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
  - nextSibling - Devuelve el siguiente nodo hermano
  - nextElementSibling - Deuelve el siguiente nodo elemento hermano
  - previousSibling - Devuelve el anterior nodo hermano
  - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
  - closest(selector) - Selecciona el nodo más cercano que cumpla con el selector,
  aún es experimental.
*/

const pivot = document.getElementById('pivot');

console.log(document.parentNode); // null
console.log(document.parentElement); // null
console.log(pivot.parentNode);
console.log(pivot.parentElement);
console.log(pivot.parentElement.parentElement.parentElement);

console.log(pivot.childNodes);
console.log(pivot.children);

console.log(pivot.firstChild);
console.log(pivot.firstElementChild);

console.log(pivot.lastChild);
console.log(pivot.lastElementChild);

console.log(pivot.hasChildNodes()); // true
console.log(pivot.firstChild.hasChildNodes()); // false

console.log(pivot.nextSibling);
console.log(pivot.nextElementSibling);
console.log(pivot.parentElement.nextElementSibling);
console.log(pivot.firstElementChild.nextElementSibling.nextElementSibling);

console.log(pivot.previousSibling);
console.log(pivot.previousElementSibling);
console.log(pivot.parentElement.previousElementSibling);
console.log(pivot.lastElementChild.previousElementSibling.previousElementSibling.textContent);


















