import { createStore, combineReducers } from 'redux';
import { loadState } from './states'

function currentUserReducer(state = [], action){
  console.log('userReducer was called with state', state, 'and action', action)
 switch (action.type) {
   case 'SET_CURRENT_USER':
     return [...state, action.currentUser];
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
