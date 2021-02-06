/* exported todos */
function beforeUnload(event) {
  /* a function is being defined with the name beforeUnload and the paramenter event,
  followed by the opening curly brace for the function definition block */
  var todosJSON = JSON.stringify(todos);
  /* the stringify method of the JSON object is being called with one argument, the
  variable todos, and the return value is being assigned to the variable todosJSON */
  localStorage.setItem('javascript-local-storage', todosJSON);
  /* the setItem method of the localStorage object is being called with two arguments,
  the string 'javascript-local-storage', and the value of the variable todosJSON */
}
/* closing curly brace for the function definition block */

var todos = [];
/* an empty array literal is being assigned to the variable todos */
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
/* the getItem method of the localStorage object is being called with one argument, the
string 'javascript-local-storage', and the return value is being assigned to the variable
previousTodosJSON */
if (previousTodosJSON !== null) {
  /* there is an if statement with the condition of the value of the variable
  previousTodosJSON is not strictly equal to null, followed by the opening curly brace for
  the if statement */
  todos = JSON.parse(previousTodosJSON);
  /* the parse method of the JSON object is being called with one argument, the value of
  the variable previousTodosJSON, and the return value is being assigned to the variable
  todos */
}
/* the closing curly brace for the if statement */
window.addEventListener('beforeunload', beforeUnload);
/* the addEventListener method of the window object is being called with two arguments,
the string 'beforeunload' and the value of the variable beforeUnload */
