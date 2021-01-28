/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesWithoutStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      valuesWithoutStrings.push(values[i]);
    }
  }
  return valuesWithoutStrings;
}
