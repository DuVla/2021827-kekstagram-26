/* eslint-disable no-unexpected-multiline */
// random number
function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    throw new RangeError('Числа не должны быть отрицательными');
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
window.console.log( getRandomInteger(1, 10));


// String
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
window.console.log(checkStringLength('text', 140));


const IDS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25'
];

const URLS = [
  'photos/.1.jpg',
  'photos/.2.jpg',
  'photos/.3.jpg',
  'photos/.4.jpg',
  'photos/.5.jpg',
  'photos/.6.jpg',
  'photos/.7.jpg',
  'photos/.8.jpg',
  'photos/.9.jpg',
  'photos/.10.jpg',
  'photos/.11.jpg',
  'photos/.12.jpg',
  'photos/.13.jpg',
  'photos/.14.jpg',
  'photos/.15.jpg',
  'photos/.16.jpg',
  'photos/.17.jpg',
  'photos/.18.jpg',
  'photos/.19.jpg',
  'photos/.20.jpg',
  'photos/.21.jpg',
  'photos/.22.jpg',
  'photos/.23.jpg',
  'photos/.24.jpg',
  'photos/.25.jpg',
];

const DESCRIPTIONS = [
  'Передо мной интересная (удачная, занимательная и т.п.) фотография.',
];


const LIKES = [
  getRandomInteger(15, 200),
];

// Comments

const ID_COMMENTS = [
  getRandomInteger(1, 400),
];

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
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

const getRandomArrayElement = (elements) => elements
  [getRandomInteger(0, elements.length - 1)];

const createFoto = () => ({
  id: getRandomArrayElement(IDS),
  url: getRandomArrayElement(URLS),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  comments: {
    id: getRandomArrayElement(ID_COMMENTS),
    avatar: getRandomArrayElement(AVATARS),
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
});

const similarPhotos = Array.from({length: SIMILAR_IMG_COUNT}, createFoto);
window.console.log(similarPhotos);
