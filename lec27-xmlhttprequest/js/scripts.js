
const button = document.getElementById('button');

button.addEventListener('click', () => {
  let xhr;
  if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject('Microsoft.XMLHTTP');

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', (e) => {
    const dataJson = JSON.parse(e.target.response);

    const list = document.querySelector('ul#list');
    if(!list.hasChildNodes()) {
      const fragmentList = document.createDocumentFragment();
      for(const userInfo of dataJson) {
        const listItem = document.createElement('li');
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragmentList.append(listItem);
      }
      list.append(fragmentList);
    }
  })
  
  xhr.send();
});

