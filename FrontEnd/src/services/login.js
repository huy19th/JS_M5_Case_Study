import axios from "axios";

export const postUser = async user => {
  let res = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: 'http://localhost:8000/api/auth/login',
    data: user
  });
  if (res.data) {
    let {user, token} = res.data;
    localStorage.setItem('token', token)
    return user;
  }
  else return {};
}