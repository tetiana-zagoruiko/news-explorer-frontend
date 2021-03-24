export const BASE_URL = 'http://51.143.18.84';

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "password": password, "email": email, "name": name })
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "password": password, "email": email })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
} 