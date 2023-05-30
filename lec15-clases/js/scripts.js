class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos=`Me llamo ${nombre} ${apellido} y tengo ${edad} años`;
  }

  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const person1 = new Persona('Juan','García',25);
const person2 = new Persona('Marta','García',35);
console.log(person1.edad+1);
console.log(person1.saludar());
console.log(person2.saludar());