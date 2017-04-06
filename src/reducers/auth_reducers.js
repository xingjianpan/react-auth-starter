import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
  // console.log(action);
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case actionTypes.UNAUTH_USER:
      return { ...state, authenticated: false, user: null };
    case actionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.CLEAR_AUTH_ERROR:
      return { error: '' };
    case actionTypes.SET_USER:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
