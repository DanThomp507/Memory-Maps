const { api, updateToken } = require('./api');

export const registerUser = async (resgisterData) => {
  const resp = await api.post(`/users/`, { user: resgisterData });
  return resp.data;
}

// export const verifyToken = async () => {
//   const token = localStorage.getItem('authToken');
//   if (token === null) {
//     return false;
//   } else {
//
//     try {
//
//       const resp = await api.get(`/users/verify`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       updateToken(token);
//       console.log(resp.data)
//       return resp.data;
//     } catch (e) {
//       console.log(e);
//       return false;
//     }
//   }
// }

export const loginUser = async loginData => {
  const resp = await api.post(`/user_token`, { auth: loginData });
  // updateToken(loginData.token.jwt);
  return resp.data;
}
export const editUser = async (id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(`/users/${id}`, edits);
  console.log("this is edit user: resp", respData);
  return respData.data;
};
