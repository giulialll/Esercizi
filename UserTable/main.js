const title = document.createElement('h1');
title.textContent='TABELLA UTENTI';

document.body.appendChild(title);


function genera_tabella(users){
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const row = document.createElement('tr');
  const head_1 = document.createElement('th');
  head_1.textContent= "Nome";
  const head_2 = document.createElement('th');
  head_2.textContent = "Username";
  const head_3 = document.createElement('th');
  head_3.textContent = "E-mail";
  const head_4 = document.createElement('th');
  head_4.textContent="Phone";
  document.body.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(row);
  row.appendChild(head_1);
  row.appendChild(head_2);
  row.appendChild(head_3);
  row.appendChild(head_4);
  const tbody = document.createElement('tbody');
  for(const user of users){
    const row_data = document.createElement('tr');
    const data_1 = document.createElement('td');
    data_1.textContent = user.name;
    const data_2 = document.createElement('td');
    data_2.textContent = user.username;
    const data_3 = document.createElement('td');
    data_3.textContent = user.email;
    const data_4 = document.createElement('td');
    data_4.textContent = user.phone;
    row_data.appendChild(data_1);
    row_data.appendChild(data_2);
    row_data.appendChild(data_3);
    row_data.appendChild(data_4);
    tbody.appendChild(row_data);
  }
  table.appendChild(tbody);
  
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
      genera_tabella(users);
    });




