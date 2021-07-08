import { combineReducers } from 'redux';
import fileInfoReducer from './fileInfoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  fileInfo: fileInfoReducer,
  user: userReducer,
});

export default rootReducer;
