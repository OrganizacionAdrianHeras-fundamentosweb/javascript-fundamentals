/*
Un callback es una función que se ejecuta a través de otra función.
Los callbacks no son asíncronos.
*/

// const getUser = (id, cb) => {
//   const user = {
//     name: 'Dorian',
//     id,
//   }

//   if(id == 2) cb("User doesn't exist");
//   else cb(null, user);
// };

// getUser(1, (err, user) => {
//   if(err) return console.log(err);
//   else console.log(`user name is ${user.name}`);
// });

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

const getUser = (id, cb) => {
  const user = users.find((user) => user.id == id);

  if(!user) cb(`Doesn't exist user with id ${id}`);
  else cb(null, user);
};

const getEmail = (user, cb) => {
  const email = emails.find((email) => email.id == user.id);
  if(!email) cb(`${user.name} doesn't have email`);
  else cb(null, {
    id: user.id,
    name: user.name,
    email: email.email
  });
};

getUser(3, (err, userInfo) => {
  if(err) return console.log(err);

  getEmail(userInfo, (err, emailInfo) => {
    if(err) return console.log(err);
    console.log(emailInfo);
  });
});

