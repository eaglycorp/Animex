import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';

const registerAccount = (username, name, email, password) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`${baseURL}/auth/register`, {
        username,
        name,
        email,
        password
    })
  }
}

const loginAccount = (email, password) => {
  return {
    type: 'LOGIN',
    payload: axios.post(`${baseURL}/auth/login`, {
        email,
        password
    })
  }
}

const logoutAccount = () => {
  return {
    type: 'LOGOUT'
  }
}

export {
    registerAccount,
    loginAccount,
    logoutAccount
}