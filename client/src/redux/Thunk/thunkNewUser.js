import { initUserAC } from '../actionCreators/actionCreatorUser';

export const thunkNewUser = (newUser) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/user/registration`, {
      method: 'Post',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => dispatch(initUserAC(data)))
      .then((data) => localStorage.setItem('token', data.payload.token))
      .catch((error) => console.log(error));
  };
};
