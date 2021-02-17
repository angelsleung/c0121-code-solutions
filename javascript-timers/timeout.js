function displayHelloThere() {
  heading.textContent = 'Hello There';
}

var heading = document.querySelector('h1');
setTimeout(displayHelloThere, 2 * 1000);
