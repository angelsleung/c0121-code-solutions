/* exported chunk */
function chunk(array, size) {
  var resultArray = [];
  var subArray = [];
  for (var i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      resultArray.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    resultArray.push(subArray);
  }
  return resultArray;
}
