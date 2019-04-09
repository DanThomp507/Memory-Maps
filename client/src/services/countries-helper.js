const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const createNewComment = async (id, comment) => {
  const respData = await api.post(`/stations/${id}/comments/new`, comment);
  return respData;
};

export {
  createNewComment
}
