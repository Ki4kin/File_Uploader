import { ADD_FILE, EDIT_FILE_NAME, INIT_FILE_INFO } from '../actionTypes/actionTypes';

export const initFileInfoAC = (payload) => ({
  type: INIT_FILE_INFO,
  payload,
});

export const editFileNameAC = (payload) => ({
  type: EDIT_FILE_NAME,
  payload,
});

export const addFileAC = (payload) => ({
  type: ADD_FILE,
  payload,
});
