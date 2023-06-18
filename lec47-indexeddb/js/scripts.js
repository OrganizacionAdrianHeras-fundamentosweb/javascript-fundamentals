const form = document.getElementById('form');
const tasks = document.getElementById('tasks');
const inputName = document.getElementById('inpName');
const selectName = document.getElementById('selName');
const buttonSubmit = document.getElementById('button');

if(indexedDB && form) {
  let db;
  const request = indexedDB.open('taskList', 1);

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    console.log('CREATED', db);
    const objectStore = db.createObjectStore('tasks',{
      // autoIncrement: true,
      keyPath: 'taskTitle',
    });
  };

  request.onsuccess = (e) => {
    db = e.target.result;
    console.log('OPEN', db);
    readData();
  };

  request.onerror = (error) => {
    console.log('Error', error);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const action = buttonSubmit.dataset.action;
    const formData = new FormData(form);
    const data = {
      taskTitle: formData.get('task'),
      taskPriority: formData.get('priority'),
    };
    switch(action) {
      case 'add':
        const addDataRequest = addData(data);
        addDataRequest.onsuccess = (e) => {
          const id = e.target.result;
          readById(id);
        };
        break;
      case 'update':
        const updateDataRequest = updateData(data);
        updateDataRequest.onsuccess = (e) => {
          convertAddModeForm();
          tasks.textContent = '';
          readData();
          form.reset();
        };
        break;
    }

  });

  tasks.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    let key;
    switch(action) {
      case 'update':
        key = e.target.dataset.key;
        const getDataRequest = getData(key);
        getDataRequest.onsuccess = (e) => {
          convertUpdateModeForm();

          const objValue = e.target.result;
          inputName.value = objValue.taskTitle;
          selectName.value = objValue.taskPriority;
        };
        break;
      case 'delete':
        key = e.target.dataset.key;
        const deleteDataRequest = deleteData(key);
        
        deleteDataRequest.onsuccess = (e) => {
          tasks.textContent = '';
          readData();
        };
        break;
    }
  });

  const addData = (data) => {
    /*
      the transaction by default is readonly
    */
    const transaction = db.transaction(['tasks'],'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.add(data);
    return request;
  };

  const readData = () => {
    const transaction = db.transaction(['tasks']);
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.openCursor();

    const fragment = document.createDocumentFragment();
    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if(cursor) {
        const key = cursor.key;
        const objValue = cursor.value;

        addElementTaskToFragment(key, objValue, fragment);

        cursor.continue();
      } else {
        console.log('No more data');
        tasks.append(fragment);
      }
    };
  };

  const readById = (key) => {
    const transaction = db.transaction(['tasks']);
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.get(key);

    const fragment = document.createDocumentFragment();
    request.onsuccess = (e) => {
      const objValue = e.target.result;
      addElementTaskToFragment(key, objValue, fragment);
      tasks.append(fragment);
    };
  };

  const addElementTaskToFragment = (key, taskValue, fragment) => {
    const taskTitle = document.createElement('p');
    taskTitle.textContent = taskValue.taskTitle;
    fragment.append(taskTitle);

    const taskPriority = document.createElement('p');
    taskPriority.textContent = taskValue.taskPriority;
    fragment.append(taskPriority);

    const taskUpdate = document.createElement('button');
    taskUpdate.dataset.key = key;
    taskUpdate.dataset.action = 'update';
    taskUpdate.textContent = 'Update';
    fragment.append(taskUpdate);

    const taskDelete = document.createElement('button');
    taskDelete.dataset.key = key;
    taskDelete.dataset.action = 'delete';
    taskDelete.textContent = 'Delete';
    fragment.append(taskDelete);
  };

  const getData = (key) => {
    const transaction = db.transaction(['tasks']);
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.get(key);
    
    return request;
  }
  
  const updateData = (data) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.put(data);

    return request;
  };

  const deleteData = (key) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.delete(key);

    return request;
  };

  const convertUpdateModeForm = () => {
    inputName.setAttribute('readonly','true');
    buttonSubmit.dataset.action = 'update';
    buttonSubmit.textContent = 'Update Task';
  };

  const convertAddModeForm = () => {
    inputName.removeAttribute('readonly');
    buttonSubmit.dataset.action = 'add';
    buttonSubmit.textContent = 'Add Task';
  };

}
