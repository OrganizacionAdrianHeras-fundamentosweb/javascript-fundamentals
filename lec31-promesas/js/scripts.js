// Una promesa es un objeto con 2 callbacks internos

const users = [
  {
    id: 1,
    name: 'Dorian',
  },
  {
    id: 2,
    name: 'Laura',
  },
  {
    id: 3,
    name: 'Carlos',
  }
]

const emails = [
  {
    id: 1,
    email: 'doriam@gmail.com',
  },
  {
    id: 2,
    email: 'laura@gmail.com'
  }
]

const getUser = (id) => {
  const user = users.find((user) => user.id == id);
  return new Promise((resolve, reject) => {
    if(!user) reject(`Doesn't exist user with id ${id}`);
    else resolve(user);
  });
};

const getEmail = (user) => {
  const email = emails.find((email) => email.id == user.id);
  return new Promise((resolve, reject) => {
    if(!email) reject(`${user.name} doesn't have email`);
    else resolve({
      id: user.id,
      name: user.name,
      email: email.email,
    });
  });
};


getUser(3)
  .then((user) => getEmail(user))
  .then((email) => console.log(email))
  /*
  el catch maneja cualquier que suceda durante toda la ejcucipon, 
  independientemente de en que promesa se generó el error.
  */
  .catch((err) => {
    console.log(err);
  });

/*
Forma simplificada de llamado entre promesas
*/
getUser(5)
  /*
    como then() espera recibir un callback, entonces puedes
    mandar defrente la función getEmail
  */
  .then(getEmail)
  .then(console.log)
  .catch(console.log);
