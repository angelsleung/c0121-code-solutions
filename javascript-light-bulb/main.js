var $lightBulb = document.querySelector('.lightbulb');
var $container = document.querySelector('.container');

function lightSwitch(event) {
  if ($lightBulb.className === 'lightbulb on') {
    $lightBulb.className = 'lightbulb off';
    $container.className = 'container off';
  } else {
    $lightBulb.className = 'lightbulb on';
    $container.className = 'container on';
  }
}

$lightBulb.addEventListener('click', lightSwitch);
