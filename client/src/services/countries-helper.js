const axios = require('axios');

const api = axios.create({
  baseURL: 'https://sleepy-ridge-49878.herokuapp.com'
});

const createNewComment = async (country_id, comment) => {
  const respData = await api.post(`/countries/${country_id}/comments/`, comment);
  console.log('this is createnewcomment', respData);
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
console.log('this is createNewBlogPost',respData);
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
const deleteCountryComment = async (country_id, id) => {
  console.log(country_id, id);
  const resp = await api.delete(`/countries/${country_id}/comments/${id}`);
  return resp.data;
};
const deleteCountryBlog = async (country_id, id) => {
  console.log(country_id, id);
  const resp = await api.delete(`/countries/${country_id}/blogs/${id}`);
  return resp.data;
};
export {
  createNewComment,
  fetchCountries,
  createNewBlogPost,
  fetchCountry,
  fetchCountryComments,
  fetchCountryBlogs,
  deleteCountryComment,
  deleteCountryBlog
}
