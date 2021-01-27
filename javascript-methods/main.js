var num1 = 10;
var num2 = 20;
var num3 = 30;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Wonder Woman', 'Superman', 'Batman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Angel Leung';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
