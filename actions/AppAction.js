import {action} from './rootaction';

import { SET_USER, PERSIST_USER, ADD_EVENT_MODAL_VISIBILITY, PERSIST_ADD_EVENT_MODAL_VISIBILITY } from '../actionTypes/AppActionTypes';

export const setUserAction = (payload) : any => action(SET_USER, payload);

export const persistUserAction = (payload) : any => action(PERSIST_USER, payload);

export const addEventModalVisibility = (payload) : any => action(ADD_EVENT_MODAL_VISIBILITY, payload);

export const persistAddEventModalVisibility = (payload) : any => action(PERSIST_ADD_EVENT_MODAL_VISIBILITY, payload);
