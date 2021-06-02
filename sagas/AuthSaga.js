// Imports: Dependencies
import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { createUserAction, updateUserAction ,persistCreateUserAction, loginUserAction, persistLoginUserAction, SingOutUserAction, persistSignOutUserAction } from '../actions/AuthAction';
import { setUserAction } from '../actions/AppAction';
import { getActionType } from '../actions/rootaction';
import auth from '@react-native-firebase/auth';

// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* createUserSaga(action) {
    try {
        console.log(action, " CreateUserSaga ");

        const responseOfSignUp = yield call([auth(),auth().createUserWithEmailAndPassword],action.payload.email, action.payload.password);

        console.log("createUserSaga : ", responseOfSignUp.user);

        yield put(setUserAction({user: responseOfSignUp.user}));

        // yield put(updateUserAction(action.payload));
    }
    catch (error) {
        yield put(setUserAction({ user: {} }));

        const errorString = JSON.stringify(error.message);
        alert((errorString.substring(errorString.indexOf('[', 10))).replace("\"", "").replace("[", "").replace("]", ""));
    }
}; 

export function* loginUserSaga(action) {
    try {

        const response = yield call([auth(), auth().signInWithEmailAndPassword],action.payload.email, action.payload.password);

        yield put(persistLoginUserAction({ isUserLoggedIn: true }));

    }
    catch (error) {
        
        const errorString = JSON.stringify(error.message);
        alert((errorString.substring(errorString.indexOf('[', 10))).replace("\"", "").replace("[", "").replace("]", ""));

    }
};

export function* SingOutUserSaga(action) {
    try {

        const response = yield call([auth(), auth().signOut]);
        
        yield put(persistLoginUserAction({ isUserLoggedIn: false }));

    }catch (error) {

        const errorString = JSON.stringify(error.message);
        alert((errorString.substring(errorString.indexOf('[', 10))).replace("\"", "").replace("[", "").replace("]", ""));

    }
}

export function* updateUserProfileSaga(action) {
    try {

        console.log("updateUserProfile", action, actionpayload.displayName, action.payload.phoneNumber);

        // const responseUserName = yield call([auth() , auth().currentUser.updateProfile], action.displayName);

        // console.log("1", responseUserName);

        // const responsePhoneNumber = yield call([auth(),auth().currentUser.updatePhoneNumber], action.payload.phoneNumber);

        // console.log("2", responsePhoneNumber);

        const user = auth().currentUser;

        console.log("updateUserProfileResponse", user);

        
    } catch (error) {
        alert(error)
    }
}

export const authWatcher: any = [
    // Take Last Action Only
    takeLatest(getActionType(createUserAction), createUserSaga),
    takeLatest(getActionType(loginUserAction), loginUserSaga),
    takeLatest(getActionType(SingOutUserAction), SingOutUserSaga),
    takeLatest(getActionType(updateUserAction), updateUserProfileSaga)
];