/*
  Determinados

  bucle for od / for in

  for(let variable of estructura) {
    código a ejecutar
  }

  Palabras reservadas de bucles
    break - rompe el bucle
    continue - se salta las posicion (es) que le indiquemos y después
               continúa la ejecución.
*/

let names = ['Paco', 'José', 'Paula', 'María'];

for(let name of names) {
  console.log(name);
}

for(let index in names) {
  console.log(`${index} : ${names[index]}`);
}

for(let i=0;i<names.length;i++) {
  if(names[i] === "Paula") break;
  console.log(names[i]);
}

for(let i=0;i<names.length;i++) {
  if(names[i] === "Paula") continue;
  console.log(names[i]);
}

for(let name of names) {
  if(name === "Paula") continue;
  console.log(name);
}

for(let index in names) {
  if(names[index] === "Paula") continue;
  console.log(names[index]);
}





