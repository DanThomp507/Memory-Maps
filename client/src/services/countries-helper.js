const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const createNewComment = async (country_id, comment) => {
  const respData = await api.post(`/countries/${country_id}/comments/`, comment);
  return respData;
};
const fetchCountries = async () => {
  const respData = await api.get(`/countries`);
  return respData;
};
const fetchCountry = async (country) => {
  const respData = await api.get(`/countries/${country}/`);
  return respData.data;
};
const createNewBlogPost = async (user_id, country_id, blog) => {
const respData = await api.post(`/countries/${country_id}/blogs/`, blog);
return respData;
}
export {
  createNewComment,
  fetchCountries,
  createNewBlogPost,
  fetchCountry,
}
