import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  toastr: toastrReducer,
});

export default rootReducer;
