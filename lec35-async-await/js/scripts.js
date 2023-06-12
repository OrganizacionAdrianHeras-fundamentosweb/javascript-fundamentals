/*
then() -> método disponible para operaciones asíncronas que se activa
         cuando se completó la operación asíncrona.
await -> permite esperar para obtener el resultado de una promesa. 
         await solo se puede usar en una operación asyncrona
async -> palabra clave que permite que una función devuelva una promesa.
*/

// const getName = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Dorian');
//     }, 1500);
//   });
// }

// const sayHello = async () => {
//   let res;
//   try {
//     const name = await getName();
//     res = `Hello ${name}`
//   } catch(error) {
//     console.log(error);
//   }
//   return res;
// }

// sayHello().then(console.log)


const users = [
  {
    id: 1,
    name: 'Dorian',
  },{
    id: 2,
    name: 'Laura',
  },{
    id: 3,
    name: 'Carlos',
  }
];

const emails = [
  {
    id: 1,
    email: 'dorian@gmail.com',
  },{
    id: 2,
    email: 'laura@gmail.com',
  }
]

const getUser = async (id) => {
  const user = users.find((u) => u.id == id);
  if(!user) throw new Error(`Doesn't exist an user with id ${id}`)
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((e) => e.id == user.id);
  if(!email) throw new Error(`${user.name} hasn't email`);
  else return {
    id: user.id,
    name: user.name,
    email: email.email,
  };
}

const getInfo = async () => {
  try {
    const user = await getUser(2);
    return await getEmail(user);
  } catch(error) {
    console.log(error);
  }
};

getInfo().then(console.log);


