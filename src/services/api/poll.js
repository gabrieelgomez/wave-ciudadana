class PollService {

  constructor (api) {
    this.api = api;
  }

  create = async ({payload, tokens, successCallback = () => {}, errorCallback = () => {}}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/polls/create',
      payload,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback,
      errorCallback
    })
    console.log(res)
  }

  getCategories = async ({tokens}) => {
    const { uid, client, access_token } = tokens;
    const res = await this.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/poll_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    let data = [];

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    return data;
  }
}

export default PollService