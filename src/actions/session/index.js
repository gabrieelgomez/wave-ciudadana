export const SET_CURRENT_USER = (currentUser) => (
  {
    type: 'SET_CURRENT_USER',
    payload: {
      currentUser
    }
  }
)

export const REMOVE_CURRENT_USER = () => (
  {
    type: 'REMOVE_CURRENT_USER',
    payload: {}
  }
)