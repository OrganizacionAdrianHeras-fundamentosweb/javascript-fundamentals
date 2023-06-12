
const buttonAxio = document.getElementById('button-axio');
const buttonFetch = document.getElementById('button-fetch');

buttonAxio.addEventListener('click', () => {
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
  }).then((res) => {
    const list = document.getElementById('list-axio');
    if(list.children.length == 0) {
      const fragment = document.createDocumentFragment();
      for(user of res.data) {
        const li = document.createElement('li');
        li.textContent = `${user.id} - ${user.name}`;
        fragment.append(li);
      }
      list.append(fragment);
    }
  }).catch(console.log);
});

buttonFetch.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
    const list = document.getElementById('list-fetch');

    if(list.children.length == 0) {
      const fragment = document.createDocumentFragment();
      for(const user of data) {
        const li = document.createElement('li');
        li.textContent = `${user.id} - ${user.name}`;
        fragment.append(li);
      }
      list.append(fragment);
    }
  }).catch(console.log)
});






