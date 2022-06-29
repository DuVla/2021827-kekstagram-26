import {createPhotos} from './data.js';
// const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture__img');

// const similarPhotos = createPhotos();

// similarPhotos.forEach(() => {
//   const photosElement = similarPictureTemplate.cloneNode(true);
// });

// const usersUrl = 'photos/${id}.jpg';
// const elementTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const elementPicture = elementTemplate.cloneNode(true);
// const srcElement = elementPicture.querySelector('[src]');
// srcElement.textContent = usersUrl;
// document.body.append(elementPicture);
// console.log(elementPicture)

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
});

similarListElelemet.appendChild(similarListFragment);
window.console.log(similarListElelemet);
