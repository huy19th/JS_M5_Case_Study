import axios from "axios";

export const postUser = async user => {
  try {
    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      url: 'http://localhost:8080/api/auth/register',
      data: user
    });
  }
  catch (e) {
    throw new Error(e.response.data.message)
  }
  ;
}