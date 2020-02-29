import { createStore, combineReducers } from 'redux';
import { loadState } from '../initializers/states';
import sessionReducer from './session';

let rootReducer = combineReducers({
  session:  sessionReducer,
});

const persistedState = loadState();

const storeRedux = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeRedux;
