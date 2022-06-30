// модуль, который отвечаeт за отрисовку окна с полноразмерным изображением.
import { createPhotos } from './data.js';

const userBigPicture = document.querySelector('.big-picture');
userBigPicture.classList.remove('hidden');
const bigPictureElement = userBigPicture.querySelector('.big-picture');
const bigPictureTemplate = document.querySelector('.big-picture').content;
const bigPicture = createPhotos;
const bigPictureFragment = document.createDocumentFragment();

bigPicture.forEach(({})=> {
  const pictureElement = bigPictureTemplate.cloneNode(true);
});
