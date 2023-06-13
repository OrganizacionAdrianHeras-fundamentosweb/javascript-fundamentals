/*
Expresiones regulares
  Son una secuencia de caracteres que forma un patrón de búsqueda
  principalmente utilizada para la búsqueda de patrones de cadena
  de caracteres u operaciones de sustituciones.

  sintaxis:
    /patron/
  Banderas:
    i: ignore case. No diferencia entre mayúsculas y minúsculas.
    g: global. Busca de forma global, es decir, no se para después de
       la primera coincidencia.

  Comodines:
    -Sustitucion: Define un comodín dentro del patron. El símbolo es el "."

    -Listado de caracteres válidos: Entre corchetes se pone una lista de los
    caraceteres válidos.
    [aeiou] Con esto cogeríamos todas las vocales.

    -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos
    un rango. [a-z].
    Todas las letras minúsculas.
    El rango funciona en el orden de la tabla ASCII

    -Mezcla entre rangos y listas
      Podemos unir los dos anteriores en una sola expresión. [0-5ou]. Serían números
      del 0 al 5, la letras "o" y la letras "u".

    -Cadenas completas:
      Para establecer una cadena completa debe ir entre paréntesis.
      Si queremos más palabras irán separadas por un pipe. (lorem|amet) es
      válida la palabra "lorem" y la palabra "amet".
  
  Delimitadores:
    ^ Antes de este símbolo no puede haber nada
    $ Después de este simbolo no puede haber nada
    ^hola$
  
  Cantidad
    -llaves: lo que está antes tiene que aparecer la cantidad exacta de veces.
    Hay tres combinaciones posbiles.
      {n} Se tiene que repetir n veces
      {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
      {n,} Se tiene que repetir como mínimo n veces y sin máximo
    ^[a-ZA-Z]{1,3}@{1}$
    -asterisco: Lo que está antes del asterisco
    puede estar, puede no estar y se peude repetir. .*@*\..*
    -interrogación: Lo que está antes de la interrogación puede no estar,
    pero si está solo puede aparecer una vez.
      ^[ae]?$
    - operador más; lo que está antes del + tiene que estar una vez como mínimo.
    A-[0-9]+

  Caracteres:
    \s: Coincide con un carácter de espacio, entre ellos incluidos
    espacio, tab, salto de página, salto de línea y retorno de carro. ^[a-zA-Z]
    +\s[a-zA-Z]+$
    \S: coincide con todo menos carateres de espacio ^\S{5}$
    \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
    \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9]
    ^\D{5}$
    \w: Coincide con cualquier carácter alfanumérico, incluyedo el guión
    bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
    \W: Coincide con todo menos caracteres de palabra. ^\W+$
*/

const text = document.getElementById('text').textContent.trim();
const regEx = /lorem/gi;
const regEx2 = new RegExp('lorem', 'gi');

console.log(regEx.test(text)); // true
console.log(regEx2.test(text)); // true





