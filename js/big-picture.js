// модуль, который отвечаeт за отрисовку окна с полноразмерным изображением.
import { escEvent } from './util.js';

let realComment = [];
const SHOW_COMMENTS = 5;

const modal = document.querySelector('.big-picture');
const closeButtonModal = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
// основа
const closeBigPicturePhoto = document.querySelector('.big-picture__cancel');
const bigPicturePhoto = document.querySelector('.big-picture__img img');
const bigPictureLike = document.querySelector('.likes-count');

// Comments
const bigPictureComments = document.querySelector('.comments-count');
const bigPictureCommentsList = document.querySelector('.social__comments');
const pictureCommentsDescription = document.querySelector('.social__caption');
const pictureCommentCount = document.querySelector('.social__comment-count');
const pictureCommentLoader = document.querySelector('.comments-loader');
const bigPictureCommentItem = document.querySelector('.social__comment');


function showCommentsAll(commentsInfo) {
  const commentFragment = document.createDocumentFragment();

  commentsInfo.forEach(({ avatar, name, message }) => {
    const comment = bigPictureCommentItem.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.append(comment);
  });
  return commentFragment;
}

function showOneComments(comments) {
  const visibleComments = comments.slice(0, SHOW_COMMENTS);
  const firstComments = showCommentsAll(visibleComments);

  pictureCommentCount.firstChild.textContent = `${visibleComments.length } из `;
  bigPictureCommentsList.appendChild(firstComments);

  if (visibleComments.length === comments.length) {
    pictureCommentLoader.classList.add('hidden');
  }
}

function commentClickHandler() {
  const addingComments = realComment.slice(bigPictureCommentsList.children.length, bigPictureCommentsList.children.length + SHOW_COMMENTS);
  const showMoreComments = showCommentsAll(addingComments);
  bigPictureCommentsList.appendChild(showMoreComments);

  if (realComment.length === bigPictureCommentsList.children.length) {
    pictureCommentLoader.classList.add('hidden');
  }

  pictureCommentCount.firstChild.textContent = `${bigPictureCommentsList.children.length } из `;
}

export function showPictureFull(url, likes, comments, description) {
  bigPictureModalOpen();
  bigPicturePhoto.src = url;
  bigPictureLike.textContent = likes;
  bigPictureComments.textContent = comments.length;
  pictureCommentsDescription.textContent = description;

  bigPictureCommentsList.innerHTML = '';
  realComment = comments;

  closeBigPicturePhoto.addEventListener('click', modalCloseClickHandler);
  pictureCommentLoader.addEventListener('click', commentClickHandler);
  showOneComments(comments);
}


// modal

function closeEscHandler(evt) {
  if (escEvent(evt)) {
    evt.preventDefault();

    modalCloseClickHandler();
  }
}

function bigPictureModalOpen() {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');

  closeButtonModal.addEventListener('click', modalCloseClickHandler);
  document.addEventListener('keydown', closeEscHandler);
}

function modalCloseClickHandler() {
  modal.classList.add('hidden');
  pictureCommentLoader.classList.remove('hidden');
  body.classList.remove('modal-open');

  closeButtonModal.removeEventListener('click', modalCloseClickHandler);
  document.removeEventListener('keydown', closeEscHandler);
}
