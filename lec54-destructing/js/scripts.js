/*
La destructuración es una expresión de Javascript que hace posible la
extracción de datos de arreglos y objetos.
*/

const person = {
  name: 'Dorian',
  age: 20,
  email: 'dorian@gmail.com'
}

// FORMA TRADICIONAL
// const name = person.name;
// const age = person.age;
// const email = person.email;


// APLICANDO DESTRUCTURING
/*
De esta forma las variables a recibir el valor
debe tener el mismo nombre que las propiedades del objeto
*/
// const {age, name, email} = person;
// console.log(name, age, email);

/*
En esta forma podemos definir el nombre de la variable que queramos
y que haga rerencia al nombre de la propiedad del cual obtener el valor
*/
// const {age: edad, name: nombre, email: correo} = person;
// console.log(nombre, edad, correo);

// const numbers = [1,2,3,4];

// const [firstP] = numbers;
// const [a,b,thirdP] = numbers;

// console.log(numbers[0]);
// console.log(firstP);
// console.log(a,b,thirdP);

// const printPerson = ({name}) => {
//   console.log(name);
// };

// const printPerson = ({name: nombre}) => {
//   console.log(nombre);
// };

// printPerson(person);

const getUsers = async () => {
  const {data: users, status, message} = await axios('https://jsonplaceholder.typicode.com/users')
  .catch((error) => {
    return {
      data: error.response.data,
      status: error.response.status,
      message: error.message,
    }
  });

  if(status == 200) {
    console.log(`${Array.from(users).length} elements`);
    console.log(users);
  } else if (status == 404) {
    console.log(`Error message: ${message} , Data: ${Array.from(users).length} elements`);
  }
};

getUsers();
