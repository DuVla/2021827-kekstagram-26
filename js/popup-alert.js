import {escEvent, isOutsideEvent} from './util.js';


export const  openAlert = (type, message, buttonText) => {
  const alertTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const alert = alertTemplate.cloneNode(true);

  const closeAlertButton = alert.querySelector(`.${type}__button`);

  if (message) {
    alert.querySelector(`.${type}__title`).textContent = message;
    closeAlertButton.textContent = buttonText;
  }

  const escCloseKeyHandler = (evt) => {
    if (escEvent(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  };

  const onOutCloseClickHandler = (evt) => {
    if ( isOutsideEvent(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  };

  const  alertCloseClickHandler = () => {
    alert.remove();

    closeAlertButton.removeEventListener('click', alertCloseClickHandler);
    document.removeEventListener('click', onOutCloseClickHandler);
    document.removeEventListener('keydown', escCloseKeyHandler);
  };

  closeAlertButton.removeEventListener('click', alertCloseClickHandler);
  document.removeEventListener('click', onOutCloseClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);

  document.body.append(alert);

  closeAlertButton.addEventListener('click', alertCloseClickHandler);
  document.addEventListener('click', onOutCloseClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
};
