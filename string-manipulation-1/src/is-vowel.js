/* exported isVowel */
function isVowel(character) {
  var capitalChar = character.toUpperCase();
  return capitalChar === 'A' || capitalChar === 'E' || capitalChar === 'I' || capitalChar === 'O' || capitalChar === 'U';
}
