import * as ActionTypes from '../actionTypes/AppActionTypes';

// Initial State
const initialState = {
    user: {},
    addEventModalVisibility: false,
  };
  // Redux: Counter Reducer
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.PERSIST_USER: {
        console.log("appReducer ", action.payload);
        if(action) {
          return {
            user: action.payload,
          };
        }else{
          return state;
        }
      }

      case ActionTypes.PERSIST_ADD_EVENT_MODAL_VISIBILITY: {
        console.log("appReducer 1 ", action.payload);
        if(action) {
          return {
            addEventModalVisibility: action.payload.addEventModalVisibility,
          };
        }else{
          return state;
        }
      }

      default: {
        return state;
      }
    }
  };
  // Exports
  export default appReducer;