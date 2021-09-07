import { createAction, createReducer } from 'redux-act';
import {put, takeLatest} from "@redux-saga/core/effects";

export const addToCartAction = createAction('ADD-CART');
// export const logOutAction = createAction('LOGOUT-ACTION');

const initialState = [];

const addToCartSaga = function* () {
    try {

    }
    catch (e) {
        console.log("Something went Wrong!")
    }
}

/* Sagas */
export const cartRootSaga = function* () {
    yield takeLatest(addToCartAction, addToCartSaga);
};

/* Reducers */
export const cartReducer = createReducer(
    {
        // [setAuthAction]: (state,payload) => {
        //     return {
        //         ...state,
        //         token:payload.token,
        //         user:payload.user
        //     };
        // },
    },
    initialState
);