const initialState = {
  tokens: {
    client: null,
    access_token: null,
    uid: null,
  },
  currentUser: null
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };

    case 'SET_TOKENS':
      return {...state, tokens: action.payload };

    case 'DROP_CURRENT_USER':
      return initialState;

    default:
      return state;
  }
}
