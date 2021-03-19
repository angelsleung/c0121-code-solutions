const takeAChance = require('./take-a-chance');

const angelPromise = takeAChance('Angel');

angelPromise.then(value => {
  console.log(value);
});

angelPromise.catch(error => {
  console.log(error.message);
});
