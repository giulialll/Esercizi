const title = document.createElement('h1');
title.textContent='TABELLA UTENTI';

document.body.appendChild(title);


function genera_tabella(users){
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const row = document.createElement('tr');
  ['Nome', 'Username', 'E-mail', 'Phone'].forEach(header => {
    const th = document.createElement('th');
    th.textContent= header;
    row.appendChild(th);
  })
  document.body.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(row);
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




