/* exported intersection */
function intersection(first, second) {
  var intersectionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && !intersectionArray.includes(first[i])) {
      intersectionArray.push(first[i]);
    }
  }
  return intersectionArray;
}
