// String
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
window.console.log(checkStringLength('text', 140));

// random number
function getRandomPositiveInteger(min, max) {
  if (min < 0 || max < 0) {
    throw new RangeError('Числа не должны быть отрицательными');
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
window.console.log(getRandomPositiveInteger(1, 20));

const DESCRIPTIONS = [
  'Передо мной интересная (удачная, занимательная и т.п.) фотография.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const NAMES = [
  'Аксинья',
  'левтина',
  'Александра',
  'Алина',
  'Алиса',
  'Анастасия',
  'Анжела',
  'Анна',
  'Арианна',
  'Аурелия',
  'Валентина',
  'Валерия',
  'Василина',
  'Василиса',
  'Алексей',
  'Владимир',
  'Борис',
  'Виталий ',
  'Егор',
  'Денис',
  'Гена',
  'Петя',
  'Мага убийца',
  'Мага кровопийца',
  'Мага камень',
];

const SIMILAR_IMG_COUNT = 25;


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: [{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }],
});

// testDate
const makePhotos = () => {
  const testData = [];
  for (let i = 1; i <= 25; i++) {
    testData.push(createPhoto(i));
  }
  return testData;
};
const IDS = makePhotos(SIMILAR_IMG_COUNT);
window.console.log(IDS);
