// random number
function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    throw new RangeError('Числа не должны быть отрицательными');
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
window.console.log( getRandomInteger(10, 10));


// String
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
window.console.log(checkStringLength('text', 140));

