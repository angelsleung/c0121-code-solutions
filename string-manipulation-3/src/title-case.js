/* exported titleCase */
function titleCase(string) {
  var resultString = '';
  var afterColonWord = false;
  var wordArray = string.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i].toLowerCase();
    if (word.includes('-')) {
      var words = word.split('-');
      var firstWord = words[0][0].toUpperCase() + words[0].slice(1);
      var secondWord = words[1][0].toUpperCase() + words[1].slice(1);
      word = firstWord + '-' + secondWord;
    } else if (word.includes('javascript')) {
      word = word.replace('javascript', 'JavaScript');
    } else if (word.includes('api')) {
      word = word.replace('api', 'API');
    } else if (!minorWords.includes(word) || i === 0 || afterColonWord) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    resultString += word + ' ';
    afterColonWord = false;
    if (word.includes(':')) {
      afterColonWord = true;
    }
  }
  return resultString.slice(0, resultString.length - 1);
}
