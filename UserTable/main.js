const title = document.createElement('h1');
title.textContent='TABELLA UTENTI';

document.body.appendChild(title);


function genera_tabella(users){
  const table = document.createElement('table');
  const thead = generaHeaderTabella();
  document.body.appendChild(table);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  for(const user of users){
    const row_data = generaRigaTabella(user);
    tbody.appendChild(row_data);
  }
  table.appendChild(tbody);
  
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
      genera_tabella(users);
    });




function generaRigaTabella(user) {
  const row_data = document.createElement('tr');
  ['name', 'username', 'email', 'phone'].forEach(field => {
    const td = document.createElement('td');
    td.textContent = user[field];
    row_data.appendChild(td);
  });
  return row_data;
}

function generaHeaderTabella() {
  const thead = document.createElement('thead');
  const row = document.createElement('tr');
  ['Nome', 'Username', 'E-mail', 'Phone'].forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    row.appendChild(th);
  });
  thead.appendChild(row);
  return thead;
}

