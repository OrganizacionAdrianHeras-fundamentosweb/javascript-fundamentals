/*
  indexdb: es una manera de almacenar datos de forma persistente en el navegador.
    A diferencia de localstorage, este permite almacenar cantidas más grandes de datos.
    indexdb tiene su propios eventos DOM:
      onupgradeneeded -> este evento se ejecuta si es que la base de datos no está creada.
      open -> crea la base de datos a través del objeto indexdb. 
        Recibe como parámetro un verisón que debe ser un número entero. Si coloco
        distintas versiones se crearán diferentes bases de datos.
      onsuccess -> si todo ha ido bien con la base de datos creada, entonces pasa a abrir
        la base de datos.
      onerror -> si algo ha ido mal a la hora de crear la base de datos.
    createObjectStore -> crea almacén de datos (es como un colección en MongoDB).

  Contenido extra para buscar:
  Método getAll() para obtener los registors de la base de datos
  Método clear() para borrar objetos del alamacen
  Método deleteDatabase() para borrar la base de datos
  Método onBlocked() para bloquear bases de datos en los cambios de versión
  objeto IDBKeyRange para búsquedas en la base de datos
  Método createIndex() para la creación de índices en la base de datos
  Versionado de bases de datos

  Librería indexedDB
    https://dexie.org/
*/

// const indexedDb = window.indexedDB;

if(indexedDB) {
  let db;
  const request = indexedDB.open('taskList', 1);

  request.onsuccess = (e) => {
    // db = request.result;
    db = e.target.result;
    console.log('OPEN', db);
  };

  request.onupgradeneeded = (e) => {
    // db = request.result;
    db = e.target.result;
    console.log('Create', db);
    const createObjectStore = db.createObjectStore('tasks');
  };

  console.log('Error', error)
  request.onerror = (error) => {
  };

}
