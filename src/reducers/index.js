import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { loadState } from '../initializers/states';
import sessionReducer from './session';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  session:  sessionReducer,
});

const persistedState = loadState();

const storeRedux = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default storeRedux;
