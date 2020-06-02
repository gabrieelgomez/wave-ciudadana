class LikeService {

  constructor (api) {
    this.api = api;
  }

  create = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'POST',
      endpoint: 'v1/likes/new',
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  delete = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'POST',
      endpoint: `/v1/likes/unliked`,
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }
}

export default LikeService;
