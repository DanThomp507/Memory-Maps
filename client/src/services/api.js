const axios = require('axios');

const api = axios.create({
  baseURL: 'https://sleepy-ridge-49878.herokuapp.com'
});

// const updateToken = (token) => {
//   localStorage.setItem('jwt', token);
//   api.defaults.headers.common.authorization = `Bearer ${token}`;
// };

export {
  api
};
