import axios from "axios";

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const postUser = async user => {
  let res = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    url: 'http://localhost:8000/api/auth/login',
    data: user
  });
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
    console.log(res.data);
  }
}