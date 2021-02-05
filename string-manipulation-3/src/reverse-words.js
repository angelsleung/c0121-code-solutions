/* exported reverseWords */
function reverseWords(string) {
  var reversedWords = '';
  var wordArray = string.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    for (var j = word.length - 1; j >= 0; j--) {
      reversedWords += word[j];
    }
    reversedWords += ' ';
  }
  reversedWords = reversedWords.slice(0, reversedWords.length - 1);
  return reversedWords;
}
