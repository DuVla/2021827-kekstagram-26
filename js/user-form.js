// valid text and hashtag
const HASHTAG = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const form = document.querySelector('.img-upload__form');
const inputHashtag = form.querySelector('#hashtags');
const descriptionInput = form.querySelector('#description');
// const maxHashtagLength = 20;
// const maxHashtagNumber = 5;

const pristine = new Pristine(form, {
  classTo: 'img-upload__form--element',
  errorClass: 'img-upload__form--invalid',
  errorTextParent: 'img-upload__form--element',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form--error',
});

function validateHashtag(value) {
  const hashtagAll = value.split('');
  let isValidate = true;

  if (value.length > 0) {
    hashtagAll.forEach((hashtag) => {
      isValidate = isValidate && HASHTAG.test(hashtag);
    });
  }
  return isValidate;
}

const commentValid = (value) => value.length <= 140;

pristine.addValidator(
  descriptionInput,
  commentValid,
  'Не более 140 символов'
);

pristine.addValidator(
  inputHashtag,
  validateHashtag(),
  'Неверный формат'
);

form.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();
  if (!isValidate) {
    evt.preventDefault();
  }
});


// function hashtagValid() {
//   const hashtagAll = inputHashtag.value.toLowerCase().trim().split('');
//   const hashtagAllUnique = new Set(hashtagAll);

//   if (!inputHashtag.value) {
//     inputHashtag.setCustomValidity('');

//     return false;
//   }

//   for (let i = 0; i < hashtagAll.length; i++) {
//     if (!HASHTAG.test(hashtagAll[i])) {
//       inputHashtag.setCustomValidity(
//         `Хэш-тег должен начинается с символа # (решётка)

//       Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.

//       Максимальная длинна хэш-тега не должна превышать ${maxHashtagLength} символов (включая решетку)`,
//       );
//       return false;
//     } else if (hashtagAll.length > maxHashtagNumber) {
//       inputHashtag.setCustomValidity(`Хэш-тегов не должно быть больше чем ${maxHashtagNumber}`);
//     } else if (hashtagAll.length !== hashtagAllUnique.size) {
//       inputHashtag.setCustomValidity('Хештеги не должны повторяться');
//     } else {
//       inputHashtag.setCustomValidity('');
//     }
//   }
//   inputHashtag.reportValidaty();
// }

//   for (let i = 0; i < hashtagAll.length; i++) {
//     if (!HASHTAG.test(hashtagAll[i])) {
//       inputHashtag.pristine(
//         `Хэш-тег должен начинается с символа # (решётка)

//       Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.

//       Максимальная длинна хэш-тега не должна превышать ${maxHashtagLength} символов (включая решетку)`,
//       );
//       return false;
//     } else if (hashtagAll.length > maxHashtagNumber) {
//       inputHashtag.pristine(`Хэш-тегов не должно быть больше чем ${maxHashtagNumber}`);
//     } else if (hashtagAll.length !== hashtagAllUnique.size) {
//       inputHashtag.pristine('Хештеги не должны повторяться');
//     } else {
//       inputHashtag.pristine('');
//     }
//   }
//   inputHashtag.pristine();
// }
