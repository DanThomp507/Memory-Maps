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
  return respData;
};
const fetchCountry = async (country_id) => {
  const respData = await api.get(`/countries/${country_id}/`);
  return respData;
};
const createNewBlogPost = async (user_id, country_id, blog) => {
const respData = await api.post(`/users/${user_id}/countries/${country_id}/blogs/`, blog);
return respData;
}
export {
  createNewComment,
  fetchCountries,
  createNewBlogPost,
  fetchCountry,
}
