function countDown() {
  var num = heading.textContent;
  if (num > 1) {
    num--;
    heading.textContent = num;
  } else {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}

var heading = document.querySelector('h1');
var timerId = setInterval(countDown, 1 * 1000);
