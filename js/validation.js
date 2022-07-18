// valid text and hashtag
import { arrayUnique } from './util.js';
import { checkStringLength} from './util.js';
import {sendData} from './api.js';
import {modalCloseUploadClickHandler, resetInput} from './upload.js';
import {openAlert} from './popup-alert.js';

const COMMENT_MAX_TEXT_LENGTH = 140;
const Hashtags = {
  HASHTAG: /^#[A-Za-zА-Яа-я0-9]{1,19}$/,
  HESHTAG_MAX_LENGTH: 20,
  HESHTAG_MIN_LENGTH: 2,
  HASHTAG_MAX_NUMBER: 5,
};

const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

// Проверка комметариев
pristine.addValidator(
  descriptionInput,
  (comment) => checkStringLength(comment, COMMENT_MAX_TEXT_LENGTH),
  'Длина не более 140 символов'
);


// Проверка хештегов
// Не больше 5
const checkHashtagValid = (value) => value !== '' ? value.trim().toLowerCase().split('') : [];
pristine.addValidator(
  hashtagsInput,
  (hashtags) => checkHashtagValid(hashtags).length <= Hashtags.HASHTAG_MAX_NUMBER,
  'Не больше 5 хэш-тегов'
);

// хэш-тег начинается с символа #
pristine.addValidator(
  hashtagsInput,
  (hashtags) => hashtags === '' || checkHashtagValid(hashtags).every((value) => /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,}$/.test(value)),
  'Хэш - тег начинается с # и содержит в себе буквы и числа',
);

// максимальная длина хэш-тега 20 символов не включая решетку (19)
pristine.addValidator(
  hashtagsInput,
  (hashtags) => hashtags === '' || checkHashtagValid(hashtags).every((value) => Hashtags.HESHTAG_MIN_LENGTH && value.length <= Hashtags.HESHTAG_MAX_LENGTH),
  'Длинна хэш-тега 20 символов'
);

//Хэш-теги разделяются пробелами
pristine.addValidator(
  hashtagsInput,
  (hashtags) => hashtags === '' || checkHashtagValid(hashtags).every((value) => /[^-_=+;:,.]$/m.test(value)),
  'Между хеш-тэгами должен быть пробел'
);

//Хэш-теги не должны повторяться
pristine.addValidator(
  hashtagsInput,
  (hashtags) => hashtags === '' || arrayUnique(checkHashtagValid(hashtags)),
  'Хэш-теги не должны повторяться'
);

function resetUploadForm() {
  form.reset();

  modalCloseUploadClickHandler();
  resetInput();
}

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      resetUploadForm();
      openAlert('success');
    },
    () => {
      resetUploadForm();
      openAlert('error');
    },
    new FormData(form),
  );
});

form.addEventListener('change', () => {
  pristine.validate();
});
