const scaleLowButton = document.querySelector('.scale__control--smaller');
const scaleMoreButton = document.querySelector('.scale__control--bigger');
const scaleFocus = document.querySelector('.scale__control--value');
const scalePreview = document.querySelector('.img-upload__preview img');

const DEFAULT_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

function setScale() {
  const currentValue = parseFloat(scaleFocus.value);
  scalePreview.style.transform = `scale(${currentValue / 100})`;
}

function minScaleClickHandler() {
  const currentValue = parseFloat(scaleFocus.value);

  if (currentValue === MIN_SCALE) {
    return false;
  }
  scaleFocus.value = `${currentValue - DEFAULT_SCALE}%`;
  setScale();
}

function maxScaleClickHandler() {
  const currentValue = parseFloat(scaleFocus.value);

  if (currentValue === MAX_SCALE) {
    return false;
  }
  scaleFocus.value = `${currentValue + DEFAULT_SCALE}%`;
  setScale();
}

function resetModifier() {
  scalePreview.style.transform = '';
}

scaleLowButton.addEventListener('click', minScaleClickHandler);
scaleMoreButton.addEventListener('click', maxScaleClickHandler);

export {resetModifier};
