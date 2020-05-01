const initialState = {
  pollsHome: []
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POLLS_HOME':
      return { ...state, pollsHome: action.payload };

    default:
      return state;
  }
}
