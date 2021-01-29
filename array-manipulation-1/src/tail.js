/* exported tail */
function tail(array) {
  var arrayTail = [];
  for (var i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
}
