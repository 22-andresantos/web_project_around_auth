const BASE_URL = 'https://se-register-api.en.tripleten-services.com/v1';

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Erro: ${res.status}`);
  }

  return res.json();
}

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
}
