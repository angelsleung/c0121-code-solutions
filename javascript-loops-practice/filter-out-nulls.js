/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesWithoutNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesWithoutNulls.push(values[i]);
    }
  }
  return valuesWithoutNulls;
}
