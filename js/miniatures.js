import { createPhotos } from './data.js';
import { showPictureFull } from './big-picture.js';

const similarListElelemet = document.querySelector('.pictures');
const similarUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarUsers = createPhotos;

function removeOldList() {
  similarListElelemet.querySelectorAll('.picture').forEach((item) => item.remove());
}

const pictureListFragment = document.createDocumentFragment();
removeOldList();

similarUsers.forEach(({ id, url, likes, comments, description }) => {
  const picture = similarUserTemplate.cloneNode(true);

  picture.href = `#${id}`;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => {
    showPictureFull(url, likes, comments, description);
  });
  pictureListFragment.append(picture);
});
similarListElelemet.append(pictureListFragment);
