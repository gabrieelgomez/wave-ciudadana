import { createStore, combineReducers } from 'redux';
import { loadState } from './states'

const initialState = {
  currentUser: null,
  stay: 0,
}

function currentUserReducer(state = initialState, action){
  // console.log('userReducer was called with state', state, 'and action', action)
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, ...action.payload };

    case 'REMOVE_CURRENT_USER':
      return initialState;

    default:
      return state;
  }
}

let rootReducer = combineReducers({
  currentUser:  currentUserReducer,
});

const persistedState = loadState();

const storeRedux = createStore(rootReducer, persistedState);

export default storeRedux;
