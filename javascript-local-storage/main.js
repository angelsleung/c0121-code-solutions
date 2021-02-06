/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
/* the querySelector method of the document object is being called with one argument, string #todo-form
   the return value is being assigned to the variable $todoForm */

$todoForm.addEventListener('submit', function (event) {
/* the addEventListener method of the $todoForm object is being called with two arguments
   the first is the string 'submit' and the second is an anonymous function definition
   with the paramenter event */

  event.preventDefault();
  /* the preventDefault method of the event object is being called with no arguments */
  var todo = {
    /* an object literal is being assigned to the variable todo */
    todoId: uuid.v4(),
    /* the v4 method of the uuid object is being called with no arguments, and the return value is
    being assigned to the property todoId */
    task: $todoForm.elements.task.value,
    /* the value property of the object stored within the task property of the object stored within
    the elements property of the $todoForm object is being assigned to the task property */
    isCompleted: false
    /* the boolean false is being assigned to the isCompleted property */
  };
  /* closing curly brace for the object literal */
  todos.push(todo);
  /* the push method of the todos object is being called with one argument, the variable todo */
  $todoList.append(renderTodo(todo));
  /* the append method of the $todoList object is being called with one argument, the return value of
  the renderTodo function with one argument, the variable todo */
  $todoForm.reset();
  /* the reset method of the $todoForm object is being called with no arguments */
});
/* closing curly brace for the function definition block */

var $todoList = document.querySelector('#todo-list');
/* the querySelector method of the document object is being called with one argument, the
string #todo-list, and the return value is being assigned to the variable $todoList */

$todoList.addEventListener('change', function (event) {
  /* the addEventListener of the $todoList object is being called with two arguments: the first is
  the string 'change', and the second is an anonymous function definition with one paramenter, event,
  then there is an opening curly brace for the function definition block */
  var todoId = event.target.getAttribute('id');
  /* the getAttribute method of the object stored within the target property of the event object is
  being assigned to the variable todoId */
  for (var i = 0; i < todos.length; i++) {
    /* there is a for loop with the initialization of 0 being assigned to the variable i, the
    condition of i less than the length property of the todos object, and the final expression of
    i being incremented by 1; then there is the opening curly brace for the for loop */
    if (todos[i].todoId === todoId) {
      /* there is an if statement with the condition of the todoId property of the todos at i object
      being strictly equal to the variable todoId, then there is the opening curly brace for the if
      statement */
      todos[i].isCompleted = event.target.checked;
      /* the checked property of the object stored within the target property of the event object is
      being assigned as the value of the isCompleted property of the todos at i object */
      break;
      /* break statement */
    }
    // closing curly brace for the if statement
  }
  // cloing curly brace for the for loop
});
/* closinc curly brace for the function definition and closing parenthesis for the addEventListener
method call */

for (var i = 0; i < todos.length; i++) {
  /* there is a for loop with an initialization of the number 0 being assigned to the variable i, the
  condition of i is less than the length properties of the todos object, and the final expression of i
  being incremented by one; followed by the opening curly brace for the for loop */
  var $todo = renderTodo(todos[i]);
  /* the renderTools function is being called with one argument, the value of the variable todos at i,
  and the return value is being assigned to the variable $todo */
  $todoList.appendChild($todo);
  /* the appendChild method of the $todoList object is being called with one argument, the variable $todo */
}
// the closing curly brace for the for loop

function renderTodo(todo) {
/* function definition with the name renderTodo and the parameter todo
  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  /* the createElement method of the document object is being called with one argument, the
  string 'li', and the return value is being assigned to the variable $todo */
  $todo.setAttribute('class', 'list-group-item');
  /* the setAttribute method of the $todo object is being called with two arguments, the
  string 'class' and the string 'list-group-item' */

  var $formCheck = document.createElement('div');
  /* the createElement method of the document object is being called with one argument, the
  string 'div', and the return value is being assigned to the variable $formCheck */
  $formCheck.setAttribute('class', 'form-check d-flex');
  /* the setAttribute method of the $formCheck object is being called with two arguments, the
  string 'class' and the string 'form-check d-flex' */

  var $checkbox = document.createElement('input');
  /* the createElement method of the document object is being called with one argument, the string
  'input', and the return value is being assigned to the variable $checkbox */
  $checkbox.checked = todo.isCompleted;
  /* the isCompleted property of the todo object is being assigned as the value of the checked
  property of the $checkbox object */
  $checkbox.setAttribute('id', todo.todoId);
  /* the setAttribute method of the $checkbox object is being called with two arguments, the string 'id'
  and the value of the todoId property of the todo object */
  $checkbox.setAttribute('type', 'checkbox');
  /* the setAttribute method of the $checkbox object is being called with two arguments, the
  string 'type' and the string 'checkbox' */
  $checkbox.setAttribute('class', 'form-check-input');
  /* the setAttribute method of the $checkbox object is being called with two arguments, the string
  'class' and the string 'form-check-input' */

  var $label = document.createElement('label');
  /* the createElement method of the document object is being called with one argument, the string
  'label', and the return value is being assigned to the variable $label */
  $label.setAttribute('for', todo.todoId);
  /* the setAttribute method of the $label object is being called with two arguments, the string 'for'
  and the value of the todoId property of the todo object */
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  /* the setAttribute method of the $label object is being called with two arguments, the string
  'class' and the string 'form-check-label flex-grow-1 m1-2' */
  $label.textContent = todo.task;
  /* the task property of the todo object is being assigned as the value of the textContent property
  of the $label object */

  $todo.append($formCheck);
  /* the append method of the $todo object is being called with one argument - the value of the
  variable $formCheck */
  $formCheck.append($checkbox, $label);
  /* the append method of the $formCheck object is being called with two arguments, the value of
  the variable $checkbox, and the value of the variable $label */

  return $todo;
  /* the value of the variable $todo is being returned from the function */
}
/* closing curly brace for the function definition block */
