// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { setUserAction, persistUserAction, addEventModalVisibility, persistAddEventModalVisibility } from '../actions/AppAction';
import { persistSignOutUserAction } from '../actions/AuthAction';
import { getActionType } from '../actions/rootaction';

// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* setUserSaga(action) {
  try {

    if (Object.keys(action.payload.user).length === 0) {
      yield put(persistSignOutUserAction({ isUserLoggedIn: false }));
      yield put(persistUserAction({}));
    } else {
      yield put(persistSignOutUserAction({ isUserLoggedIn: true }));
      yield put(persistUserAction(action.payload.user));
    }

  }
  catch (error) {
    console.log(error);
  }
};

export function* addEventModalVisibilitySaga(action) {
  console.log("addEventModalVisibility ", action.payload.addEventModalVisibility);
  try {
    yield put(persistAddEventModalVisibility({addEventModalVisibility: action.payload.addEventModalVisibility}));
  }
  catch (error) {
    console.log(error);
  }
};

export const appWatcher: any = [
  // Take Last Action Only
  takeLatest(getActionType(setUserAction), setUserSaga),
  takeLatest(getActionType(addEventModalVisibility), addEventModalVisibilitySaga),
];