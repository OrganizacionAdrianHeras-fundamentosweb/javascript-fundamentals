/*
  Sintaxis simple
  switch(evaluacion) {
    case n:
      // codigo
      break;
    case n2:
      // codigo
      break;
    default:
      // codigo
  }

  Sintaxis múltiple
  switch(evaluación) {
    case n:
    case n2:
    case n3:
    case n4:
      // código
      break;
    case n5:
    case n6:
      // código
      break;
    default:
      // código;
  }
*/

let num = 3;
switch(num) {
  case 1:
    console.log(`Num tiene el valor ${num}`);
    break;
  case 2:
    console.log(`Num tiene el valor ${num}`);
    break;
  default:
    console.log(`Num no vale ni 1 ni 2`);
}

switch(num) {
  case 1:
  case 3:
  case 5:
    console.log(`${num} es impar`);
    break;
  case 2:
  case 4:
    console.log(`${num} es par`);
    break;
}








