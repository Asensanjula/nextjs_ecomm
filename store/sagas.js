import {all, fork} from 'redux-saga/effects';
import {authRootSaga} from "./reducers/authReducer";

export default function* rootSaga() {
    yield all([
        fork(authRootSaga),
    ]);
}