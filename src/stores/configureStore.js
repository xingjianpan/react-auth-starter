import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

const routingMiddleware = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk, routingMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
