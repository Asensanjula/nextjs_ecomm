import {all, fork} from 'redux-saga/effects';
import {authRootSaga} from "./reducers/authReducer";
import {cartRootSaga} from "./reducers/cartReducer";

export default function* rootSaga() {
    yield all([
        fork(authRootSaga),
        fork(cartRootSaga),
    ]);
}