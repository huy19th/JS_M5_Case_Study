import axios from "axios";

export const postUser = async user => {
  try {
    let res = await axios({
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      url: 'http://localhost:8080/api/auth/login',
      data: user
    });
    if (res.data) {
      let { user, token } = res.data;
      localStorage.setItem('token', token)
      return user;
    }
  }
  catch (e) {
    throw new Error(e.response.data.message)
  }
  ;
}