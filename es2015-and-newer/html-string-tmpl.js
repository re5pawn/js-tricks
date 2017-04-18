const tmpl = (users) => {
  let data = users.map(user => {
    return `<li>${user.name}: ${user.age}</li>`;
  }).join('');

  return `<ul>${data}</ul>`;
}

let users = [
  {name: 'John Doe', age: 34},
  {name: 'Jane Smith', age: 45},
  {name: 'Bob Snow', age: 27}
];

tmpl(users);
// <ul>
//   <li>John Doe: 34</li>
//   <li>Jane Smith: 45</li>
//   <li>Bob Snow: 27</li>
// </ul>
