import { combineReducers } from 'redux';

import getFactsReducer from './getFactsReducer';
import errorMessageReducer from './errorMessageReducer';

const combinedReducer = combineReducers({
  facts: getFactsReducer,
  errorMessage: errorMessageReducer
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
