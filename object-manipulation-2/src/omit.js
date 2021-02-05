/* exported omit */
function omit(source, keys) {
  var omittedObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omittedObject[key] = source[key];
    }
  }
  return omittedObject;
}
