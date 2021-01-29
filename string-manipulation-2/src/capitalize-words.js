/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalizedWords = '';
  for (var i = 0; i < words.length; i++) {
    capitalizedWords += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
  }
  return capitalizedWords.slice(0, capitalizedWords.length - 1);
}
