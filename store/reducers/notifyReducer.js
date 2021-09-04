import { createAction, createReducer } from 'redux-act';
import { call, put, takeLatest, select } from 'redux-saga/effects';

export const notify = createAction('NOTIFY/ACTION');
// export const hideLoader = createAction('LOADER/HIDE');

const initialState = {
};

/* Reducer */
export const notifyReducer = createReducer(
    {
        [notify]: (state,payload) => {
            return {...payload};
        },
    },
    initialState,
);