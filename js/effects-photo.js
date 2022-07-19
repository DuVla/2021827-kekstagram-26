const effectContainer = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');
const effectList = document.querySelector('.effects__list');
const photoPreview = document.querySelector('.img-upload__preview img');

const DEFAULT_START = 100;

let realEffect = '';
let effectMeasure = '';

const sliderOptions = {
  'NONE': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    REAL_EFFECT: '',
    EFFECT_MEASURE: '',
  },
  'CHROME': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    REAL_EFFECT: 'grayscale',
    EFFECT_MEASURE: '',
  },
  'SEPIA': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    REAL_EFFECT: 'sepia',
    EFFECT_MEASURE: '',
  },
  'MARVIN': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 0,
    STEP: 1,
    REAL_EFFECT: 'invert',
    EFFECT_MEASURE: '%',
  },
  'PHOBOS': {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    REAL_EFFECT: 'blur',
    EFFECT_MEASURE: 'px',
  },
  'HEAT': {
    RANGE: {
      MIN: 1,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    REAL_EFFECT: 'brightness',
    EFFECT_MEASURE: '',
  },
};

const loadFilterClass = (className) => {
  photoPreview.classList = '';
  photoPreview.classList.add(className);
};

const updateSliderOptions = ({ RANGE: { MIN, MAX }, START, STEP, REAL_EFFECT, EFFECT_MEASURE }, startValue, display) => {
  realEffect = REAL_EFFECT;
  effectMeasure = EFFECT_MEASURE;

  effectSlider.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });

  effectSlider.noUiSlider.set(startValue);
  effectContainer.style.display = display;
};

const resetEffectSetting = () => {
  photoPreview.classList = '';
  photoPreview.style.filter = '';

  updateSliderOptions(sliderOptions.NONE, DEFAULT_START, 'none');
};

noUiSlider.create(effectSlider, {
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});

effectSlider.noUiSlider.on('update', (_, handle, element) => {
  photoPreview.style.filter = `${realEffect}(${element[handle]}${effectMeasure})`;

  effectLevelValue.setAttribute('value', element[handle]);
});

effectList.addEventListener('change', (evt) => {
  const target = evt.target;
  const targetEffect = target.value.toUpperCase();

  if (target && target.value === 'none') {
    resetEffectSetting();
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'none');
  }

  if (target && target.value === 'chrome') {
    loadFilterClass('effects__preview--chrome');
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'block');
  }

  if (target && target.value === 'sepia') {
    loadFilterClass('effects__preview--sepia');
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'block');
  }

  if (target && target.value === 'marvin') {
    loadFilterClass('effects__preview--marvin');
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'block');
  }

  if (target && target.value === 'phobos') {
    loadFilterClass('effects__preview--phobos');
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'block');
  }

  if (target && target.value === 'heat') {
    loadFilterClass('effects__preview--heat');
    updateSliderOptions(sliderOptions[targetEffect], DEFAULT_START, 'block');
  }
});

export {resetEffectSetting};
