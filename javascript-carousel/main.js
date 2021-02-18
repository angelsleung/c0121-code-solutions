function stepRight() {
  var nextImage = null;
  var nextCircle = null;
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
    $circles[i].className = 'circle far fa-circle';
    if ($images[i] === $currentImage) {
      if (i === $images.length - 1) {
        nextImage = $images[0];
      } else {
        nextImage = $images[i + 1];
      }
    }
    if ($circles[i] === $currentCircle) {
      if (i === $circles.length - 1) {
        nextCircle = $circles[0];
      } else {
        nextCircle = $circles[i + 1];
      }
    }
  }
  nextImage.className = 'image visible';
  nextCircle.className = 'circle fas fa-circle';

  $currentImage = nextImage;
  $currentCircle = nextCircle;
}

function clickRightArrow(event) {
  clearInterval(intervalID);
  stepRight();
  autoStep();
}

function clickLeftArrow(event) {
  clearInterval(intervalID);
  var previousImage = null;
  var previousCircle = null;
  for (var i = 0; i < $images.length; i++) {
    if ($images[i] === $currentImage) {
      if (i === 0) {
        previousImage = $images[$images.length - 1];
      } else {
        previousImage = $images[i - 1];
      }
    }
    if ($circles[i] === $currentCircle) {
      if (i === 0) {
        previousCircle = $circles[$circles.length - 1];
      } else {
        previousCircle = $circles[i - 1];
      }
    }
  }
  $currentImage.className = 'image hidden';
  previousImage.className = 'image visible';

  $currentCircle.className = 'circle far fa-circle';
  previousCircle.className = 'circle fas fa-circle';

  $currentImage = previousImage;
  $currentCircle = previousCircle;

  autoStep();
}

function clickCircle(event) {
  if (!event.target.matches('.circle.far')) {
    return;
  }
  clearInterval(intervalID);
  var index = null;
  for (var i = 0; i < $circles.length; i++) {
    $circles[i].className = 'circle far fa-circle';
    if (event.target === $circles[i]) {
      index = i;
    }
  }
  event.target.className = 'circle fas fa-circle';

  for (i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
  }
  $images[index].className = 'image visible';

  $currentImage = $images[index];
  $currentCircle = event.target;

  autoStep();
}

function autoStep() {
  intervalID = setInterval(stepRight, 3000);
}

var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');

var $currentImage = document.querySelector('.visible');
var $currentCircle = document.querySelector('.fas.circle');

var $images = document.querySelectorAll('.image');
var $circles = document.querySelectorAll('.circle');
var $circlesRow = document.querySelector('.circles');

$leftArrow.addEventListener('click', clickLeftArrow);
$rightArrow.addEventListener('click', clickRightArrow);
$circlesRow.addEventListener('click', clickCircle);

var intervalID = null;
autoStep();
