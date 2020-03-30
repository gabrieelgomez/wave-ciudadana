import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadState } from '../initializers/states';
import sessionReducer from './session';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
  session:  sessionReducer,
});

const persistedState = loadState();

const storeRedux = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default storeRedux;
