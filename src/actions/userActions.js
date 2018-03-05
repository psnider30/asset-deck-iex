import sessionApi from '../api/sessionApi';
import sessionService from 'redux-react-session';
import types from './actionTypes';

export function logInSuccess() {
  return { type: types.LOG_IN_SUCCESS }
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(logInSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}


// export const login = (user, history) => {
//   return () => {
//     loginApi(user).then(response => {
//       const { token } = response;
//       sessionService.saveSession({ token })
//       .then(() => {
//         sessionService.saveUser(response.data)
//         .then(() => {
//           history.push('/assets/quote');
//         }).catch(error => console.error(error));
//       }).catch(error => console.error(error));
//     })
//   }
// };
//
export const logout = (history) => {
  return () => {
    return logoutApi().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      history.push('/login');
    }).catch(error => {
      throw(error);
    });
  };
};




// function login(data) {
//   return {
//     type: "LOGIN",
//     data,
//   }
// }
//
export function register(data) {
  return {
    type: "REGISTER",
    data,
  }
}
