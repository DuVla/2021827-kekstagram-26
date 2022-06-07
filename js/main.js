// random number
function randomInteger(min, max) {
  if (min < 0 || max < 0) {
    return 'Числа должны быть не отрицательными'
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
window.console.log( randomInteger(1, 10));


// String
function checkStringLong(str, maxLong) {
  return str < maxLong;
}
window.console.log(checkStringLong(-10, -10));


