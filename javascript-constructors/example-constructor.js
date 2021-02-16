function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exampleVariable = new ExampleConstructor();
console.log('value of exampleVariable:', exampleVariable);

var isInstanceOf = exampleVariable instanceof ExampleConstructor;
console.log('exampleVariable is instance of ExampleConstructor:', isInstanceOf);
