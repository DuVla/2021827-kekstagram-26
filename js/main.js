// random number
function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
window.console.log( randomInteger(0, 544));

// CheckString
function exString(minString) {
  const maxString = 140;
  if (maxString >= minString) {
    minString = true;
    return minString;
  } else {
    minString = false;
    return minString;
  }
}
window.console.log(exString(20));

