// модуль с вспомогательными функциями;
function getRandomPositiveInteger(min, max) {
  if (min < 0 || max < 0) {
    throw new RangeError('Числа не должны быть отрицательными');
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function escEvent(evt) {
  return evt.key === 'Esсape' || evt.key === 'Esc';
}

export {getRandomArrayElement};
export {getRandomPositiveInteger};
export {checkStringLength};
export {escEvent};
