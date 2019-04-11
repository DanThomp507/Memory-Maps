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
const createNewBlogPost = async (country_id, blog) => {
const respData = await api.post(`/countries/${country_id}/blogs/`, blog);
return respData;
}
const fetchCountryComments = async country => {
  console.log("this is countryComment", country);
  const respData = await api.get(`/countries/${country}/comments`);
  return respData.data;
};
const fetchCountryBlogs = async country => {
  console.log("this is countryBlog", country);
  const respData = await api.get(`/countries/${country}/blogs`);
  return respData.data;
};
export {
  createNewComment,
  fetchCountries,
  createNewBlogPost,
  fetchCountry,
  fetchCountryComments,
  fetchCountryBlogs,
}
