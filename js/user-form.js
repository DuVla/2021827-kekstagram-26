// valid text and hashtag
const HASHTAG = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG__LENGTH = 20;
const MAX_HASHTAG = 5;
const form = document.querySelector('.img-upload__form');
const inputHashtag = form.querySelector('text__hashtags');


const pristine = new Pristine(form, {
  classTo: 'img-upload__form--element',
  errorTextParent: 'img-upload__form--element',
  errorTextClass: 'img-upload__form--error',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    return true;
  } else {
    return false;
  }
});




const hashtags = new Pristine(form, {
  classTo: 'img-upload__field-wrapper--hashtag',
  errorTextParent: 'img-upload__field-wrapper--hashtag',
  errorTextClass: 'img-upload__field-wrapper--hashtag-error',
});


function hashtagValid() {

}
