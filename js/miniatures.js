import { showPictureFull } from './big-picture.js';
import {fetchPhoto} from './api.js';
import {openAlert} from './popup-alert.js';
import {debounce} from './util.js';
import {activateFilters, filterByComments, filterByDefault, filterByRandom} from './filter-list.js';

const RERENDER_DELAY = 500;

const similarListElement = document.querySelector('.pictures');
const similarUserTemplate = document.querySelector('#picture').content.querySelector('.picture');
const filterContainer = document.querySelector('.img-filters');


function removeOldList() {
  similarListElement.querySelectorAll('.picture').forEach((item) => item.remove());
}

function createPictureList(pictureData) {
  const pictureListFragment = document.createDocumentFragment();
  removeOldList();

  pictureData.forEach(({id, url, likes, comments, description}) => {
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
  similarListElement.append(pictureListFragment);
}

export function renderPictureList(pictureData) {
  createPictureList(pictureData);

  function changeFilterHandler(evt) {
    const target = evt.target;

    switch (target.id) {
      case 'filter-default':
        createPictureList(
          filterByDefault(pictureData),
        );
        break;
      case 'filter-random':
        createPictureList(
          filterByRandom(pictureData),
        );
        break;
      case 'filter-discussed':
        createPictureList(
          filterByComments(pictureData),
        );
        break;
    }
  }
  filterContainer.addEventListener('click', debounce(changeFilterHandler, RERENDER_DELAY));
}
export function getPictureList() {
  fetchPhoto()
    .then((data) => {
      renderPictureList(data);
      activateFilters();
    })
    .catch(() => {
      openAlert('error', 'Ошибка загрузки данных', 'закрыть');
    });
}

getPictureList();
