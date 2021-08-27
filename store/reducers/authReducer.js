import { createAction, createReducer } from 'redux-act';
import { call, put, takeLatest, select } from 'redux-saga/effects';

const initialState = {
    loginSuccess: false,
};

/* Sagas */
export const authRootSaga = function* () {
    // yield takeLatest(loginUserAction, loginUserSaga);
};

/* Reducers */
export const authReducer = createReducer(
    {},
    initialState
);