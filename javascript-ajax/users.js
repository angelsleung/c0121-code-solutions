var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr.status:', xhr.status);
  console.log('xhr.response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var userElement = document.createElement('li');
    userElement.textContent = xhr.response[i].name;
    $userList.append(userElement);
  }
});
xhr.send();
