import { createAction, createReducer } from 'redux-act';
import {put, select, takeLatest} from "@redux-saga/core/effects";

export const addToCartAction = createAction('ADD-CART');
export const removeFromCartAction = createAction('REMOVE-CART');

export const setToCartAction = createAction('SET-CART-ACTION');

const initialState = {
    itemList: [],
};

const addToCartSaga = function* (action) {
    try {
        const state = yield select(state => state.cart);
        const product = action.payload;
        const existProduct = state.itemList.find(item => item._id === product._id);

        if (state.itemList.length === 0){
            console.log("List is empty")
            state.itemList.push(product)
            console.log("add > ", state)
            yield put(setToCartAction(state.itemList));
        }
        else if (!existProduct){
            state.itemList.push(product);
            console.log("new State > ", state.itemList);
            yield put(setToCartAction(state.itemList));
        }
        else if (existProduct){
            // existProduct.qty++;
            let findIndex = state.itemList.findIndex(item => item._id === product._id);
            state.itemList[findIndex].qty++;
            // const filteredList = state.itemList.filter(item => item._id !== product._id);
            // filteredList.push(existProduct);
            yield put(setToCartAction( state.itemList));
        }

    }
    catch (e) {
        console.log("Something went Wrong!")
    }
}

const removeFromCartSaga = function* (action) {
    try {
        console.log("remove from cart action", action);
        const cart = yield select(state => state.cart);
        const product = action.payload.product;
        const type = action.payload.type;
        const existProduct = cart.itemList.find(item => item._id === product._id);

        if ("ONE" === type) {
            if (existProduct.qty === 1) {
                const newCart = cart.itemList.filter(item => item._id !== product._id);
                yield put(setToCartAction(newCart));
            } else {
                // existProduct.qty--;
                // const newCart = cart.itemList.filter(item => item._id !== product._id);
                let findIndex = cart.itemList.findIndex(item => item._id === product._id);
                cart.itemList[findIndex].qty--;
                // newCart.push(existProduct);
                yield put(setToCartAction(cart.itemList));
            }
        }
        else if ("ALL" === type){
            const newCart = cart.itemList.filter(item => item._id !== product._id);
            yield put(setToCartAction(newCart));
        }

    }
    catch (e) {
        console.log("Something Went Wrong", e)
    }
}

/* Sagas */
export const cartRootSaga = function* () {
    yield takeLatest(addToCartAction, addToCartSaga);
    yield takeLatest(removeFromCartAction, removeFromCartSaga);
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