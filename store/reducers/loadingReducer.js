import { createAction, createReducer } from 'redux-act';
import { call, put, takeLatest, select } from 'redux-saga/effects';

export const showLoader = createAction('LOADER/SHOW');
export const hideLoader = createAction('LOADER/HIDE');

const initialState = {
    loading: false,
};

/* Reducer */
export const loaderReducer = createReducer(
    {
        [showLoader]: (state) => {
            return {...state, loading:true};
        },
        [hideLoader]: (state) => {
            return {...state, loading:false};
        },
    },
    initialState,
);