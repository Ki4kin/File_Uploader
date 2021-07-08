import { initFileInfoAC } from '../actionCreators/actionCreatorFilesInfo';

export const thunkInitFileInfo = (userId) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/filesInfo`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ userId: userId }),
    })
      .then((res) => res.json())
      .then((body) => {
        dispatch(initFileInfoAC(body));
      })
      .catch((error) => console.log(error));
  };
};
