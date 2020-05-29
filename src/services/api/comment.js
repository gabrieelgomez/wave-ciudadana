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

  getPollComments = async ({tokens, id}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'GET',
      endpoint: `v1/comments/wave_citizen_polls/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    return res;
  }
}

export default CommentService;
