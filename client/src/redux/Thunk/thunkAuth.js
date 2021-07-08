import axios from 'axios';
import { initUserAC } from '../actionCreators/actionCreatorUser';

export const thunkAuth = () => {
  return (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/user/auth`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((data) => dispatch(initUserAC(data.data)))
        .then((data) => localStorage.setItem('token', data.payload.token));
    } catch (error) {
      localStorage.removeItem('token');
    }
  };
};
