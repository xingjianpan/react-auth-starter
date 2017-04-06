import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducers';
import notificationReducer from './notification_reducers';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  notifications: notificationReducer,
  routing: routerReducer,
});

export default rootReducer;
