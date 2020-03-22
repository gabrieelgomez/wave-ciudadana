import axios from 'axios';
import { BASE_DOMAIN } from '../constants';
import { SET_TOKENS } from '../actions/session';


const COMMON_HEADERS = {
  'content-type': 'application/json',
  'accept': 'application/json',
};

export const api = ({ endpoint, method, payload = {}, headers = {}, successCallback = () => {} }) => {

  const h = {
    ...COMMON_HEADERS,
    ...headers
  }

  return async (dispatch) => {
    try {
      // console.log('inside try')
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

      console.log(res)

      if (res.statusText === 'OK') {
        successCallback();
      }

      return res
    } catch (err) {
      console.error("Something went wrong ", err);
    }
  }
};

// updateUserData = () => {
//   const { uid, client, access_token } = this.props.session.tokens;
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'access-token': access_token,
//     client, uid
//   };

//   const userData = this.state.user
//   // console.log(userData)
//   axios({
//     method: 'PUT',
//     url: `${BASE_DOMAIN}/v1/auth/`,
//     headers: headers,
//     data: { ...userData }
//   })
//   .then(response => {
//     // console.log('updateUserData: ', response);
//     const headers = {
//       access_token: response.headers['access-token'],
//       client, uid
//     }
//     this.props.setTokens(headers);
//     this.props.setCurrentUser(response.data.data)
//     swal('Datos actualizados exitosamente', '', 'success')
//   })
//   .catch(error => {
//     console.log(error, 'error being returned')
//   });
// }


// export const get = ({endpoint, payload = {}, headers = {}, successCallback = () => {}, errCallback = () => {}}) => new Promise((resolve, reject) => {

//   const h = {
//     ...COMMON_HEADERS,
//     ...headers
//   }

//   axios({
//     method: 'GET',
//     url: `${BASE_DOMAIN}/${endpoint}`,
//     headers: h,
//     //data: payload,
//   })

//   .then((response) => {
//     console.log(response)
//     resolve(response)
//   })

//   .catch((error) => {
//     console.error("Something went wrong ", error);
//     reject(error)
//   });
// });

// export const post = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
//     localStorage.getItem('authToken', (err, jwt) => {
//       const headers = {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//         'Authorization': jwt
//       };
//       axios({
//         method: 'POST',
//         url: `${ENDPOINT}/${endpoint}`,
//         headers: headers,
//         data: payload,
//       })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//      });
//  });
// });

// export const put = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
//     localStorage.getItem('authToken', (err, jwt) => {
//       const headers = {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//         'Authorization': jwt
//       };
//       axios({
//         method: 'PUT',
//         url: `${ENDPOINT}/${endpoint}`,
//         headers: headers,
//         data: payload,
//       })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//      });
//  });
// });

// export const destroy = (endpoint, payload = {}, headers = {}) => new Promise((resolve, reject) => {
//     localStorage.getItem('authToken', (err, jwt) => {
//       const headers = {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//         'Authorization': jwt
//       };
//       axios({
//         method: 'DELETE',
//         url: `${ENDPOINT}/${endpoint}`,
//         headers: headers,
//       })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//      });
//  });
// });
