/* exported oddOrEven */
function oddOrEven(numbers) {
  var numbersOddEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbersOddEven.push('even');
    } else {
      numbersOddEven.push('odd');
    }
  }
  return numbersOddEven;
}
