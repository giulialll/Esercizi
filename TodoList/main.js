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

const button = document.createElement('button');
function aggiungi(label){
  const task=document.createElement('li');
  task.textContent =  label;
  list.appendChild(task);
  list.appendChild(button);
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
      aggiungi(input.value);
    }
  });
});



button.addEventListener("doubleclick",() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((tasks) => {
    for (const obj of tasks) {
      task.slice(1,task.lenght-1);
    }
  });
  });
  

 






