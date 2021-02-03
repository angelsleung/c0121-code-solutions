/* eslint-disable no-prototype-builtins */
/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstObject = {};
  var secondObject = {};
  for (var i = 0; i < firstString.length; i++) {
    if (firstObject.hasOwnProperty(firstString[i])) {
      firstObject[firstString[i]]++;
    } else {
      firstObject[firstString[i]] = 1;
    }
  }
  for (i = 0; i < secondString.length; i++) {
    if (secondObject.hasOwnProperty(secondString[i])) {
      secondObject[secondString[i]]++;
    } else {
      secondObject[secondString[i]] = 1;
    }
  }
  for (var char in firstObject) {
    if (firstObject[char] !== secondObject[char] && char !== ' ') {
      return false;
    }
  }
  for (char in secondObject) {
    if (firstObject[char] !== secondObject[char] && char !== ' ') {
      return false;
    }
  }
  return true;
}
