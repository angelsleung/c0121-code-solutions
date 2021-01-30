/* exported invert */
function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    invertedObject[source[key]] = key;
  }
  return invertedObject;
}
