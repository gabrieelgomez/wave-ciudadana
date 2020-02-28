import { createStore, combineReducers } from 'redux';
import { loadState } from '../initializers/states';
import sessionReducer from './session';

let rootReducer = combineReducers({
  session:  sessionReducer,
});

const persistedState = loadState();

const storeRedux = createStore(rootReducer, persistedState);

export default storeRedux;
