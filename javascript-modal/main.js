var $openButton = document.querySelector('.open-button');
var $popUp = document.querySelector('.pop-up');
var $overlay = document.querySelector('.overlay');
var $noButton = document.querySelector('.no-button');

function open(event) {
  $popUp.className = 'pop-up';
  $overlay.className = 'overlay';
}

function close(event) {
  $popUp.className = 'pop-up hidden';
  $overlay.className = 'overlay hidden';
}

$openButton.addEventListener('click', open);
$noButton.addEventListener('click', close);
