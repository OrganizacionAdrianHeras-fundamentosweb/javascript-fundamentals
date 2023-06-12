const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = characters.children[characters.selectedIndex].value;
  getData(value);
});

const getData = (id) => {
  let xhr = new XMLHttpRequest();

  if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  if(id == null) {
    xhr.open('GET', './php/marvel.php');
    xhr.addEventListener('load', (e) => {
      const dataJSON = JSON.parse(e.target.response);

      const fragmentSelect = document.createDocumentFragment();
      for(const heroe of dataJSON) {
        const option = document.createElement('option');
        option.setAttribute('value', heroe.id);
        option.textContent = heroe.name;
        fragmentSelect.append(option);
      }

      characters.append(fragmentSelect);
    });
  } else {
    xhr.open('GET', `./php/marvel.php?id=${id}`);
    xhr.addEventListener('load', (e) => {
      const dataJSON = JSON.parse(e.target.response);

      const fragmentTable = document.createDocumentFragment();
      for(const heroe of dataJSON) {
        const row = document.createElement('tr');
        const dataName =  document.createElement('td');
        const dataGender = document.createElement('td');
        const dataFighting = document.createElement('td');

        dataName.textContent = heroe.name;
        dataGender.textContent = heroe.gender;
        dataFighting.textContent = heroe.fighting_skills;
        row.append(dataName,dataGender,dataFighting);
        fragmentTable.append(row);
      }

      if(table.children.length > 1) table.children[1].remove();
      table.append(fragmentTable);
    });
  }

  xhr.send();
};

getData();









