import {createPhotos} from './data.js';
import {showPictureFull} from './big-picture.js';
const similarListElelemet = document.querySelector('.pictures');
const similarUserTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarUsers = createPhotos;
const similarListFragment = document.createDocumentFragment();

similarUsers.forEach(({url, likes, comments}) => {
  const userElement = similarUserTemplate.cloneNode(true);
  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__likes').textContent = likes;
  userElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(userElement);

  userElement.addEventListener('click', () => {
    showPictureFull(url, likes, comments);
  });
});
similarListElelemet.appendChild(similarListFragment);
