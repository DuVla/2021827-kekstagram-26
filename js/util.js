// модуль с вспомогательными функциями;
const BUTTON = ['Escape', 'Esc'];

export const checkStringLength = (str, maxLength) => str.length <= maxLength;

export const arrayUnique = (elements) => !elements.some((element, index) => elements.indexOf(element) !== index);

export const escEvent = (evt) => BUTTON.includes(evt.key);

export const isOutsideEvent = (evt) => evt.target.matches('section');


export const debounce = (cb, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
};
