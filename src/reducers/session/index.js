const initialState = {
  currentUser: null,
  stay: 0,
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, ...action.payload };

    case 'REMOVE_CURRENT_USER':
      return initialState;

    default:
      return state;
  }
}