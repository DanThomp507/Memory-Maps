import { api, updateToken } from './api';

export const registerUser = async (user) => {
  const { email, password } = user;
  const username = user.username;
  const name = user.name;
  const bio = user.name;

  const resp = await api.post('/users/', {
    email,
    password,
    name,
    username,
    bio
  });

  const { data } = resp;

  updateToken(data.token);
  console.log(data)
  return data;
};

export const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  if (token === null) {
    return false;
  } else {

    try {

      const resp = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      updateToken(token);
      console.log(resp.data)
      return resp.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export const loginUser = async ({ email, password }) => {
  const resp = await api.post('/users/login', {
    email,
    password
  });
  const data = resp.data;

  updateToken(data.token);

  return data;
}
export const editUser = async (id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(`/users/${id}/edit`, edits);
  console.log("this is edit user: resp", respData);
  return respData.data;
};
