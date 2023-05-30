const person = {
  name: 'Juan',
  age: 26,
  sons: ['Laura','Diego','Pepe','Rosa','Tomas']
}
console.log(person);
console.log(person.name);
console.log(person['name']);

for(const key in person) {
  // imprimiendo el nombre de los atributos del objeto
  console.log(key);
  // imprimiendo el valor de los atributos del objeto
  console.log(person[key]);
}

// imprimiendo el nombre de los hijos
for(const son of person.sons) {
  console.log(son);
}

console.log(`Hola ${person.name}. Tienes ${person.age} años 
y tus hijos se llaman ${person.sons.join(', ')}`);