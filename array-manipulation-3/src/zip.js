/* exported zip */
function zip(first, second) {
  var zippedArray = [];
  var subArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    subArray.push(first[i]);
    subArray.push(second[i]);
    zippedArray.push(subArray);
  }
  return zippedArray;
}
