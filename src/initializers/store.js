import { createStore, combineReducers } from 'redux';

function currentUserReducer(state = [], action){
  console.log('userReducer was called with state', state, 'and action', action)
 switch (action.type) {
   case 'SET_CURRENT_USER':
     // return action.currentUser;
     return [...state, action.currentUser]
     break;
   default:
     return state;
 }
}

let rootReducer = combineReducers({
  currentUser:  currentUserReducer,
});

export default createStore(rootReducer);
