var $allKeys = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy');
var $playAgain = document.querySelector('.play-again');
var index = 0;
var nextKey = $allKeys[index];
var missedCount = 0;

function pressKey(event) {
  var isNbspKey = nextKey.textContent.charCodeAt(0) === 160; // Must check because &nbsp; !== ' '
  if ((event.key === nextKey.textContent) || (event.key === ' ' && isNbspKey)) {
    nextKey.className = 'typed';
    index++;
    if (index < $allKeys.length) {
      nextKey = $allKeys[index];
      nextKey.className = 'underlined-key';
    } else {
      nextKey.className = 'typed';
      var correctCount = $allKeys.length - missedCount;
      var correctPercent = Math.floor(correctCount * 100 / $allKeys.length);
      $accuracy.textContent = 'Accuracy: ' + correctCount + '/' + $allKeys.length + ' = ' + correctPercent + '%';
      $accuracy.className = 'accuracy';
      $playAgain.className = 'play-again';
    }
  } else {
    nextKey.className = 'incorrect';
    missedCount++;
  }
}

function playAgain(event) {
  for (var i = 0; i < $allKeys.length; i++) {
    $allKeys[i].className = 'not-typed';
  }
  index = 0;
  missedCount = 0;
  $accuracy.className = 'accuracy hidden';
  $playAgain.className = 'play-again hidden';
  nextKey = $allKeys[index];
  nextKey.className = 'underlined-key';
}

addEventListener('keydown', pressKey);
$playAgain.addEventListener('click', playAgain);
