export const SET_CURRENT_USER = (currentUser) => (
  {
    type: 'SET_CURRENT_USER',
    payload: {
      ...currentUser
    }
  }
)

export const SET_TOKENS = (tokens) => (
  {
    type: 'SET_TOKENS',
    payload: {
      ...tokens
    }
  }
)

export const DROP_CURRENT_USER = () => (
  {
    type: 'DROP_CURRENT_USER',
    payload: {}
  }
)
