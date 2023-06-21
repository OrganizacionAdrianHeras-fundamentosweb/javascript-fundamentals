/*
mql = window.matchMedia(mediaQueryString)

mql viene de media query list, que es el objeto que se crea con el método
matchMedia() mediaQueryString es cualquier media query válida en CSS.
*/

// console.log(window.innerWidth); // devuelve el ancho interior de la ventana en píxeles.
// console.log(window.innerHeight); // devuelve el alto interior de la ventana en píxeles.

const title = document.getElementById('title');
const mql = matchMedia('(min-width: 600px) and (orientation: landscape)');

const apiMatchMedia = (mql) => {
  mql.matches ? (
    // NO APLICAR NUNCA ESTE TIPO DE ESTILOS
    // document.body.style.backgroundColor = 'hsl(0 100% 50%)' :

    // ESTO SI
    document.body.classList.remove('bg-royalblue'),
    document.body.classList.add('bg-red'),
    title.classList.remove('color-2a2a2a'),
    title.classList.add('color-white')
  ) :
  (
    // NO APLICAR NUNCA ESTE TIPO DE ESTILOS
    // document.body.style.backgroundColor = 'royalblue';

    // ESTO SI
    document.body.classList.remove('bg-red'),
    document.body.classList.add('bg-royalblue'),
    title.classList.remove('color-white'),
    title.classList.add('color-2a2a2a')
  );
};

addEventListener('resize', () => {
  // console.log(e);
  apiMatchMedia(mql);
});

// al cargar la página
addEventListener('DOMContentLoaded', (e) => {
  apiMatchMedia(mql);
});


