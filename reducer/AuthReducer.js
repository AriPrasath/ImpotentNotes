import * as ActionTypes from '../actionTypes/AuthActionTypes';

// Initial State
const initialState = {
  isUserLoggedIn: false,
};
// Redux: Counter Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.PERSIST_LOGIN_USER_ACTION: {
      console.log("Auth LOGIN Reducer ", action);
      if (action) {
        return {
          isUserLoggedIn: action.payload.isUserLoggedIn,
        };
      } else {
        return state;
      }
    }

    case ActionTypes.PERSIST_SIGNOUT_USER_ACTION: {
      console.log("Auth SIGNOUT Reducer ", action);
      if (action) {
        return {
          isUserLoggedIn: action.payload.isUserLoggedIn,
        };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
};
// Exports
export default authReducer;