import axios from 'axios';
const ENDPOINT = 'https://api.ibigwave.com/v1';

export const get = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    localStorage.getItem('authToken', (err, jwt) => {
      const headers = {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': jwt
      };

      axios({
        method: 'GET',
        url: `${ENDPOINT}/${endpoint}`,
        headers: headers,
        //data: payload,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});

export const post = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    localStorage.getItem('authToken', (err, jwt) => {
      const headers = {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': jwt
      };
      axios({
        method: 'POST',
        url: `${ENDPOINT}/${endpoint}`,
        headers: headers,
        data: payload,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});

export const put = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    localStorage.getItem('authToken', (err, jwt) => {
      const headers = {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': jwt
      };
      axios({
        method: 'PUT',
        url: `${ENDPOINT}/${endpoint}`,
        headers: headers,
        data: payload,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});

export const destroy = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
    localStorage.getItem('authToken', (err, jwt) => {
      const headers = {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': jwt
      };
      axios({
        method: 'DELETE',
        url: `${ENDPOINT}/${endpoint}`,
        headers: headers,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
     });
 });
});