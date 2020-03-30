import axios from 'axios';
import { BASE_DOMAIN } from '../constants';
import { SET_TOKENS } from '../actions/session';


const COMMON_HEADERS = {
  'content-type': 'application/json',
  'accept': 'application/json',
};

export const api = ({ endpoint, method, payload = {}, headers = {}, successCallback = () => {}, errorCallback = () => {} }) => {

  const h = {
    ...COMMON_HEADERS,
    ...headers
  }

  return async (dispatch) => {
    try {
      const res = await axios({
        method,
        url: `${BASE_DOMAIN}/${endpoint}`,
        headers: h,
        data: payload
      })
  
      if (res.headers.hasOwnProperty('access-token')) {
        console.debug('SETTING TOKENS')

        const tokens = {
          access_token: res.headers['access-token'],
          client: res.headers.client,
          uid: res.headers.uid
        }

        dispatch(SET_TOKENS(tokens))
      }

      if (res.statusText === 'OK') {
        successCallback();
      }

      return res
    } catch (err) {
      console.error("Something went wrong ", err);
      errorCallback(err);
    }
  }
};
