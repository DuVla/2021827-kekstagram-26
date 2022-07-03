import { escEvent } from './util.js';
// default photo
const DEFAULT_IMAGE = 'img/upload-default-image.jpg';
// Какие форматы изображений можно добавлять
const ALLOWED_FORMATS_PHOTO = ['png', 'jpeg', 'jpg'];
// modal open
const loadingOverlay = document.querySelector('.img-upload__overlay');
// close form upload ID add esc + add class hidden
const closeUpload = document.querySelector('.img-upload__cancel');
// focus image
const uploadForm = document.querySelector('.img-upload__form');
// body close class modal-open
const body = document.querySelector('body');
//html O
const uploadInput = document.querySelector('.img-upload__input');
// spectator photo
const viePhotoSpectator = document.querySelector('.img-upload__preview img');
// Photo Effect
const photoEffectSpectator = document.querySelector('.effects__preview');

function escCloseKeyHandler(evt) {
  const inputFocus = evt.target.matches('input:focus') || evt.target.matches('textarea:focus');
  if (inputFocus) {
    return false;
  }
  if (escEvent(evt)) {
    evt.preventDefault();
    modalCloseUploadClickHandler();
  }
}

function modalOpenUpload() {
  loadingOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  //close
  closeUpload.addEventListener('click', modalCloseUploadClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
}
modalOpenUpload();
function modalCloseUploadClickHandler() {
  loadingOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadForm.reset();
  resetInput();

  closeUpload.removeEventListener('click', modalCloseUploadClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);
}

uploadInput.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  // валидность формата (нижний регистр, перебор по типу)
  const goodFormat = ALLOWED_FORMATS_PHOTO.some((type) => fileName.endsWith(type));
  if (goodFormat) {
    modalOpenUpload();

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      viePhotoSpectator.src = reader.result;
      photoEffectSpectator.forEach((spectator) => {
        spectator.style.backgroundImage =  `url('${reader.result}')`;
      });
    });

    reader.readAsDataURL(file);
  }
});

function resetInput() {
  uploadInput.value = '';
  viePhotoSpectator.src = DEFAULT_IMAGE;
  photoEffectSpectator.src = DEFAULT_IMAGE;
}

