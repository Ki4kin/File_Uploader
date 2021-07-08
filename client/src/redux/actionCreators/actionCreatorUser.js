import { INIT_USER } from '../actionTypes/actionTypes';
import { LOGOUT } from '../actionTypes/actionTypes';

export const initUserAC = (payload) => ({
  type: INIT_USER,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
