function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('result of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));
console.log('result of greet("Beavis"):', greet('Beavis'));
console.log('result of getArea(17, 42):', getArea(17, 42));
console.log('result of getFirstName({ firstName: "Lelouche", lastName: "Lamperouge" }):', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('result of getLastElement(["propane", "and", "propane", "accessories"]):', getLastElement(['propane', 'and', 'propane', 'accessories']));
