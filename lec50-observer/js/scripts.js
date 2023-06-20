const boxes = document.querySelectorAll('.box');

/*
 e.isIntersecting -> devuelve true si el elemento ha sido ontersectado (se ha detectado su presencia).
                     Caso contrario devolverá falso.
*/
const callback = (entries) => {
  entries.forEach((e) => {
    if(e.isIntersecting) {
      console.log(e.target);
      console.log(e.target.id, 'It is intersecting');
    }
  });
};

const options = {
  // root: -> elemento raiz del cula el observador estará atento, por defecto es el viewport
  // rootMargin: '200px' -> margen del elemento desde el cual se activará el evento
  // rootMargin: '-200px'
  // threshold: 0.5 -> porcentaje que quieres ver del elemento para que se active el evento
  // threshold: 1 -> hasta que el elemento no se vea completamente, no se activará el evento
};

/*
  callback -> funcion como parámetor del constructor. Según la sobrecarga de parámetros puede ser:
              callaback(entries)
              callback(entries, observer)
  Donde:
    entries -> son los elementos que está observando
    observer -> es la propia instancia observer

*/
const observer = new IntersectionObserver(callback, options);

/*
 observe -> método que mantiene observando al elemento que le pases como parámetro
 unobserve -> método que permite dejar de observar al elemento
*/
boxes.forEach((b) => observer.observe(b));

