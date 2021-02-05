function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var $inputElements = document.querySelectorAll('input');
var nameInput = $inputElements[0];
var emailInput = $inputElements[1];
var $textareaInput = document.querySelector('textarea');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);
emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);
$textareaInput.addEventListener('focus', handleFocus);
$textareaInput.addEventListener('blur', handleBlur);
$textareaInput.addEventListener('input', handleInput);
