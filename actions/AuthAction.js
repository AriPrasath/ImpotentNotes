import {action} from './rootaction';

import { CREATE_USER_ACTION, PERSIST_CREATE_USER_ACTION, LOGIN_USER_ACTION, PERSIST_LOGIN_USER_ACTION, SIGNOUT_USER_ACTION, PERSIST_SIGNOUT_USER_ACTION, UPDATE_USER_ACTION } from '../actionTypes/AuthActionTypes';

export const createUserAction = (payload) : any => action(CREATE_USER_ACTION, payload);

export const persistCreateUserAction = (payload) : any => action(PERSIST_CREATE_USER_ACTION, payload);

export const loginUserAction = (payload) : any => action(LOGIN_USER_ACTION, payload);

export const persistLoginUserAction = (payload) : any => action(PERSIST_LOGIN_USER_ACTION, payload);

export const SingOutUserAction = (payload) : any => action(SIGNOUT_USER_ACTION, payload);

export const persistSignOutUserAction = (payload) : any => action(PERSIST_SIGNOUT_USER_ACTION, payload);

export const updateUserAction = (payload) : any => action(UPDATE_USER_ACTION, payload);
