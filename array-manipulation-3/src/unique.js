/* exported unique */
function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
