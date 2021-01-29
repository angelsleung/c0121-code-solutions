/* exported numVowels */
function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    var capitalLetter = string[i].toUpperCase();
    if (capitalLetter === 'A' || capitalLetter === 'E' ||
     capitalLetter === 'I' || capitalLetter === 'O' || capitalLetter === 'U') {
      vowelCount++;
    }
  }
  return vowelCount;
}
