class CommentService {

  constructor (api) {
    this.api = api;
  }

  create = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'POST',
      endpoint: 'v1/comments/new',
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  update = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'PUT',
      endpoint: `v1/comments/${payload.id}/update`,
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }

  delete = async ({id, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    await this.api({
      method: 'DELETE',
      endpoint: `v1/comments/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
  }
}

export default CommentService;
