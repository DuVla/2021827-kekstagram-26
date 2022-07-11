// модуль с вспомогательными функциями;
const BUTTON = ['Escape', 'Esc'];


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

const arrayUnique = (elements) => !elements.some((element, index) => elements.indexOf(element) !== index);

const escEvent = (evt) => BUTTON.includes(evt.key);


// unique id and url
const randomIntegerNoRepeat = (min, max) => {
  const spawn = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (spawn.length >= (max - min + 1)) {
      spawn.length = 0;
    }
    while (spawn.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    spawn.push(currentValue);

    return currentValue;
  };
};

export { getRandomArrayElement };
export { getRandomPositiveInteger };
export { checkStringLength };
export { escEvent };
export { arrayUnique };
export { randomIntegerNoRepeat };
