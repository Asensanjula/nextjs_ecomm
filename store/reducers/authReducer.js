import { createAction, createReducer } from 'redux-act';
import Cookie from 'js-cookie';
import {put, takeLatest} from "@redux-saga/core/effects";

export const setAuthAction = createAction('AUTH-DATA');
export const logOutAction = createAction('LOGOUT-ACTION');

const initialState = {
    token: null,
    user:null
};

const logOutSaga = function* () {
    try {
        Cookie.remove('refreshToken',{path: 'api/auth/accessToken'});
        localStorage.removeItem("firstLogin");
        yield put(setAuthAction(initialState));
    }
    catch (e) {
        console.log("Something went Wrong!")
    }
}

/* Sagas */
export const authRootSaga = function* () {
    yield takeLatest(logOutAction, logOutSaga);
};

/* Reducers */
export const authReducer = createReducer(
    {
        [setAuthAction]: (state,payload) => {
            return {
                ...state,
                token:payload.token,
                user:payload.user
            };
        },
    },
    initialState
);