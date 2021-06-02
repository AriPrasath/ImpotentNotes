// Imports: Dependencies
import { all } from 'redux-saga/effects';

// Imports: Redux Sagas
import { appWatcher } from './AppSaga';
import { authWatcher } from './AuthSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    ...appWatcher,
    ...authWatcher,
  ]);
};