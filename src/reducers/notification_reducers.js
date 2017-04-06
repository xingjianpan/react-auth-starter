import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
  isActive: false,
  message: '',
  action: 'dismiss',
};


export default (state = INITIAL_STATE, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case actionTypes.HIDE_NOTIFICATION:
      return { ...state, isActive: false };
    case actionTypes.SHOW_NOTIFICATION:
      return { ...state, isActive: true, message: action.payload };
    default:
      return { ...state };
  }
};
