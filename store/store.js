import { applyMiddleware,combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {authReducer} from "./reducers/authReducer";
import {loaderReducer} from "./reducers/loadingReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    loader: loaderReducer,
});

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware) )
    );

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })