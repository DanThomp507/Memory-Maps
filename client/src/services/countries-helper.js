const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const createNewComment = async (id, comment) => {
  const respData = await api.post(`/countries/${id}/comments/new`, comment);
  return respData;
};
const fetchCountries = async () => {
  const respData = await api.get(`/countries`);
  return respData.data;
};
export {
  createNewComment,
  fetchCountries
}
