/* exported union */
function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!unionArray.includes(first[i])) {
      unionArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!unionArray.includes(second[i])) {
      unionArray.push(second[i]);
    }
  }
  return unionArray;
}
