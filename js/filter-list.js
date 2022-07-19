import { shuffleArray } from './shuffle.js';

const NUMBER_OF_RANDOM_PHOTOS = 10;

const filterContainer = document.querySelector('.img-filters');
const filterButtons = [...document.querySelectorAll('.img-filters__button')];

export const filterByDefault = (photos) => photos;

export const filterByRandom = (photos) => shuffleArray(photos).slice(0, NUMBER_OF_RANDOM_PHOTOS);

export const filterByComments = (photos) => {
  const photosCopy = photos.slice();

  return photosCopy.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
};

export const activateFilters = () => {
  filterContainer.classList.remove('img-filters--inactive');

  filterContainer.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target && target.matches('.img-filters__button')) {
      filterButtons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });

      target.classList.add('img-filters__button--active');
    }
  });
};
