const button = document.getElementById('button');

button.addEventListener('click', () => {
  axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      title: 'A new post',
      body: 'Soy un body axios'
    }
  }).then((res) => console.log(res.data))
  .catch(console.log);
});