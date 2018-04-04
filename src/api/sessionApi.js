export default class SessionApi {

  static login(credentials) {
    const API_HOST = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_HOST_LOCAL : process.env.REACT_APP_API_HOST_HEROKU;
    const request = new Request(`${API_HOST}/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
