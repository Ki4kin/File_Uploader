import { addFileAC } from '../actionCreators/actionCreatorFilesInfo';

export const thunkLoad = (loadData) => {
  return async (dispatch) => {
    const res = await fetch(`${process.env.REACT_APP_URL}/load`, {
      method: 'POST',
      body: loadData,
    });
    const result = await res.json();
    await dispatch(addFileAC(result));
  };
};
