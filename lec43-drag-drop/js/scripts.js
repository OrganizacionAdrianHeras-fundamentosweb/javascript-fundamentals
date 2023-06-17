const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

/*
  dataTrasnfer
    setData: Establece la información que queremos compartir
    getData: Establece la información que queremos obtener
*/

// PENDING TASKS - FINISHED TASKS
pendingTasks.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text', e.target.id);
  // console.log(e.dataTransfer);
  // console.log(e.dataTransfer.getData('text'));
});

pendingTasks.addEventListener('drag', (e) => {
  e.target.classList.add('active');
});

pendingTasks.addEventListener('dragend', (e) => {
  e.target.classList.remove('active');
});

/*
  OBLIGATORIO, sino el evento de drop no funciona
*/
finishedTasks.addEventListener('dragover', (e) => {
  e.preventDefault();
});

finishedTasks.addEventListener('drop', (e) => {
  console.log(e);
  const element = document.getElementById(e.dataTransfer.getData('text'))
  element.classList.remove('active');
  finishedTasks.append(element);
});

// FINISHED TASKS - PENDING TASKS
finishedTasks.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text', e.target.id);
});

finishedTasks.addEventListener('drag', (e) => {
  e.target.classList.add('active');
});

finishedTasks.addEventListener('dragend', (e) => {
  e.target.classList.remove('active')
});

/*
  OBLIGATORIO, sino el evento de drop no funciona
*/
pendingTasks.addEventListener('dragover', (e) => {
  e.preventDefault();
});

pendingTasks.addEventListener('drop', (e) => {
  const element = document.getElementById(e.dataTransfer.getData('text'));
  element.classList.remove('active');
  pendingTasks.append(element);
});








