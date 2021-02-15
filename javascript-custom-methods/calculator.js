/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x ** 2;
  },
  sumAll: function (numbers) {
    var sum = numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    return sum;
  },
  getAverage: function (numbers) {
    return this.sumAll(numbers) / numbers.length;
  }
};
