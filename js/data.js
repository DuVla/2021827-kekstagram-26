//модуль, который создаёт данные.
import {getRandomArrayElement}
  from './util.js';
import {getRandomPositiveInteger}
  from './util.js';
import { randomIntegerNoRepeat } from './util.js';

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

const getRandomUniqueId = randomIntegerNoRepeat(1, 25);
const getRandomUniqueUrl = randomIntegerNoRepeat(1, 25);

const SIMILAR_IMG_COUNT = 25;

const commentNubmer = {
  MIN: 1,
  MAX: 10,
};

const createComment = () => ({
  id: getRandomUniqueId,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: getRandomUniqueId(1, 25),
  url:`photos/${getRandomUniqueUrl(1, 20)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length: getRandomPositiveInteger(commentNubmer.MIN, commentNubmer.MAX)}, createComment),
});


const makePhotos = (number) => Array.from({length: number}, createPhoto);
const createPhotos = makePhotos(SIMILAR_IMG_COUNT);
export {createPhotos};

// const makePhotos = () => {
//   const testData = [];
//   for (let i = 1; i <= 25; i++) {
//     testData.push(createPhoto(i));
//   }
//   return testData;
// };
