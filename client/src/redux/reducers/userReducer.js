import { INIT_USER, LOGOUT } from '../actionTypes/actionTypes';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_USER:
      action.payload.user.isAuth = true;
      return action.payload.user;

    case LOGOUT:
      localStorage.removeItem('token');
      return { user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
