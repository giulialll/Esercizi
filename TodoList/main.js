const titolo = document.createElement('h1');
const input = document.createElement('input');
const btn = document.createElement('button');
titolo.textContent='LISTA SPESA';
btn.textContent= 'ADD';
const list = document.createElement('ul');

document.body.appendChild(titolo);
document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(list);


function gestisci_task(label){
  const task=document.createElement('li');
  task.textContent =  label;
  list.appendChild(task);
  const btn_del  = document.createElement('button');
  btn_del.textContent="elimina";
  list.appendChild(btn_del);
  btn_del.addEventListener("click", () => {task.remove();btn_del.remove()});
  task.addEventListener("dblclick", () => {task.setAttribute("style", "background-color:green;")});
}


btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title: input.value,
      user: 1,
      complete: false,
    }),
  }).then((res) => {
    if (res.ok) {
       gestisci_task(input.value);
    }
  });
});




