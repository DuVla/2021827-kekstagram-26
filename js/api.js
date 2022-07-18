const url = {
  POST: 'https://26.javascript.pages.academy/kekstagram',
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
};


export function sendData(onSuccess, onFailure, body) {
  fetch(url.POST,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((res) => {
      if (res.ok) {
        onSuccess();
      } else {
        onFailure();
      }
    })
    .catch(() => onFailure());
}

export async function fetchPhoto() {
  const response = await fetch(url.GET,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`error status: ${response.status}, statusText: ${response.statusText}`);
}
