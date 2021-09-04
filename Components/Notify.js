import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loader";
import ToastNotify from "./ToastNotify";
import {notify} from "../store/reducers/notifyReducer";

function Notify(props) {
    const notifyState = useSelector(state => state.notify);
    console.log("Notify", notifyState);
    const dispatch = useDispatch();
    return (
        <>
            {notifyState.loading && <Loader/>}
            {
                notifyState.error &&
                <ToastNotify
                    title="Error"
                    msg={notifyState.error}
                    handleClose={()=> dispatch(notify({}))}
                    bgColor="bg-danger"
                />
            }
            {
                notifyState.success &&
                <ToastNotify
                    title="Success"
                    msg={notifyState.success}
                    handleClose={()=> dispatch(notify({}))}
                    bgColor="bg-success"
                />
            }
        </>
    );
}

export default Notify;