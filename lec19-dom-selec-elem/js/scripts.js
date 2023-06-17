/*
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida
con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que
coincidan con el selecto CSS, devuelve un nodeList
*/

// const title = document.getElementById('title');
// console.log(title);
// title.textContent = 'DOM - Accediendo a ns';
// console.log(title.textContent);

/*
  Con querySelector o querySelectorAll no se puede acceder a las psesudoelementos
  como por ejemplo: after, before.
*/
// const paragraph = document.querySelector('p.paragraph:nth-child(2)');
// const paragraph = document.querySelector('.paragraph:nth-child(1)');
// const span = paragraph.querySelector('span');
// const span = document.getElementById('title').querySelector('span');

// console.log(paragraph);
// console.log(span.textContent);

const paragraphs = document.querySelectorAll('.paragraph');
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

/*
  Se puede dar estilo con javascript, aunque no es recomendable
  Primera forma:
    element.style.color = 'hsl(0 100% 50%)';
  Segunda forma:
    element.style.setProperty('color', 'hsl(0 100% 50%)');
*/
// paragraphs[0].style.color = 'hsl(0 100% 50%)';

/*el nodeList no es un array, por lo que la función map no se reconoce*/
// paragraphs.map((p) => p.style.color = 'hsl(120 100% 30%)');

// paragraphsSpread.map((p) => p.style.color = 'hsl(120 100% 30%)')
paragraphsArray.map((p) => p.style.color = 'hsl(60 100% 30%)')


// console.log(paragraphs);








