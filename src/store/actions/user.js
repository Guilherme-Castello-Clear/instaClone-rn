import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  USER_LOADED,
} from './actionTypes';
import axios from 'axios';
const authBaseURL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY =
  'luBok4fVNUyYTUHikWOnmXe8OjeEjnMBnCzMeRRkCJaG0Mzfjq6Nd1O1741CZ9foNj9oibMfMzVS6hTBIf2TWw==';
export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export const createUser = user => {
  return dispatch => {
    dispatch(loadingUser());
    axios
      .post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      })
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        if (res.data.localId) {
          axios
            .put(`/users/${res.data.localId}.json`, {
              name: user.name,
            })
            .catch(err => {
              console.log(err);
            })
            .then(res => {
              delete user.password;
              user.id = res.data.localId;
              dispatch(userLogged(user));
              dispatch(userLoaded());
            });
        }
      });
  };
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const login = user => {
  return dispatch => {
    dispatch(loadingUser());
    axios
      .post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      })
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        if (res.data.localId) {
          user.token = res.data.idToken;
          axios
            .get(`/users/${res.data.localId}.json`)
            .catch(err => {
              console.log(err);
            })
            .then(res => {
              delete user.password;
              user.name = res.data.name;
              dispatch(userLogged(user));
              dispatch(userLoaded());
            });
        }
      });
  };
};
