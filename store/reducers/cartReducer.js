import { createAction, createReducer } from 'redux-act';
import {put, select, takeLatest} from "@redux-saga/core/effects";

export const addToCartAction = createAction('ADD-CART');

export const setToCartAction = createAction('SET-CART-ACTION');

const initialState = {
    itemList: [],
};

const addToCartSaga = function* (action) {
    try {
        const state = yield select(state => state.cart);
        const product = action.payload;

        if (state.itemList.length === 0){
            console.log("List is empty")
            state.itemList.push(product)
            console.log("add > ", state)
            yield put(setToCartAction(state.itemList));
        }
        else if (!state.itemList.find(item => item._id === product._id)){
            state.itemList.push(product);
            console.log("new State > ", state.itemList);
            yield put(setToCartAction(state.itemList));
        }

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
        [setToCartAction]: (state,payload) => {
            return {
                ...state,
                itemList:[...payload]
            };
        },
    },
    initialState
);