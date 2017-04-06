import * as actionTypes from '../../constants/actionTypes';

export const hideNotification = () => {
  return {
    type: actionTypes.HIDE_NOTIFICATION,
  };
};

export const showNotification = (message) => {
  return {
    type: actionTypes.SHOW_NOTIFICATION,
    payload: message,
  };
};
