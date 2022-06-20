//модуль, который создаёт данные.
import {getRandomArrayElement}
  from './util.js';
import {getRandomPositiveInteger}
  from './util.js';

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
  }, {
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }, {
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

const createPhotos = makePhotos(SIMILAR_IMG_COUNT);
window.console.log(createPhotos);
