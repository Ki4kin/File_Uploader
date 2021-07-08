import { initUserAC } from '../actionCreators/actionCreatorUser';

export const thunkLogin = (logInfo) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(logInfo),
    })
      .then((res) => res.json())
      .then((data) => dispatch(initUserAC(data)))
      .then((data) => localStorage.setItem('token', data.payload.token))
      .catch(({ response }) => alert(`${response.data.message}`));
  };
};
