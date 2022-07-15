import { escEvent } from './util.js';
import { resetModifier } from './scale-photo.js';
import { resetEffectSetting} from './effects-photo.js';

// default photo
const DEFAULT_IMAGE = 'img/upload-default-image.jpg';
// Какие форматы изображений можно добавлять
const ALLOWED_FORMATS_PHOTO = ['png', 'jpeg', 'jpg'];
// modal open
const loadingOverlay = document.querySelector('.img-upload__overlay');
// close form upload ID add esc + add class hidden
const closeUpload = document.querySelector('#upload-cancel');
// focus image
const uploadForm = document.querySelector('.img-upload__form');
// body close class modal-open
const body = document.querySelector('body');
//html O
const uploadInput = uploadForm.querySelector('.img-upload__input');
// spectator photo
const photoPreview = uploadForm.querySelector('.img-upload__preview img');
// Photo Effect
const photoEffectPreview = document.querySelector('.effects__preview');


// Hashtag

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

export function resetInput() {
  uploadInput.value = '';
  photoPreview.src = DEFAULT_IMAGE;
  photoEffectPreview.src = DEFAULT_IMAGE;
}

export function modalCloseUploadClickHandler() {
  loadingOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadForm.reset();
  resetEffectSetting();
  resetModifier();
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
      photoPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
