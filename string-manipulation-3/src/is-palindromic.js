/* exported isPalindromic */
function isPalindromic(string) {
  var leftIndex = 0;
  var rightIndex = string.length - 1;
  while (leftIndex < rightIndex) {
    if (string[leftIndex] === ' ') {
      leftIndex++;
    } else if (string[rightIndex] === ' ') {
      rightIndex--;
    } else {
      if (string[rightIndex] !== string[leftIndex]) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }
  }
  return true;
}
