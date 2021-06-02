// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './AppReducer';
import authReducer from './AuthReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

// Exports
export default rootReducer;