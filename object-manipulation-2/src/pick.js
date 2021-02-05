/* exported pick */
function pick(source, keys) {
  var pickedObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      pickedObject[key] = source[key];
    }
  }
  return pickedObject;
}
