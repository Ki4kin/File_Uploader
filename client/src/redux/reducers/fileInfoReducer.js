import { ADD_FILE, INIT_FILE_INFO } from '../actionTypes/actionTypes';

const fileInfoReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_FILE_INFO:
      return action.payload;

    case ADD_FILE:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default fileInfoReducer;
