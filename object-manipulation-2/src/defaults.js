/* eslint-disable no-prototype-builtins */
/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
