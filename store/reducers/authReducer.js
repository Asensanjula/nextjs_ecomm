import { createAction, createReducer } from 'redux-act';

export const setAuthAction = createAction('AUTH-DATA');

const initialState = {
    token: null,
    user:null
};

/* Sagas */
export const authRootSaga = function* () {
    // yield takeLatest(loginUserAction, loginUserSaga);
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