const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const input = process.argv.slice(2);
const [num1, operator, num2] = input;
let operation = null;

if (operator === 'plus') {
  operation = add;
} else if (operator === 'minus') {
  operation = subtract;
} else if (operator === 'times') {
  operation = multiply;
} else if (operator === 'over') {
  operation = divide;
} else {
  console.log('error');
}

const result = operation(parseInt(num1), parseInt(num2));
console.log('result:', result);
