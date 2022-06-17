import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import errorMessageReducer from './errorMessage.reducer';

const combinedReducer = combineReducers({
  auth: authReducer,
  errorMessage: errorMessageReducer
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
