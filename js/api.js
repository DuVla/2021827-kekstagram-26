import {showAlert} from './util.js';

const URL =  'https://26.javascript.pages.academy/kekstagram';


function getData (onSuccess) {
  fetch(`${URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => showAlert(error));
}

const sendData = (onSuccess, onError, onFinal, body) => {
  fetch(
    URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onError(error))
    .finally(onFinal);
};

export { sendData };
export { getData };
