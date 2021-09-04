import React from 'react';
import ToastNotify from "../Components/ToastNotify";

function Test(props) {
    return (
        <>
        <ToastNotify
            title="Error"
            msg="Sample Msg"
            handleClose={()=> dispatch(notify({}))}
            bgColor="bg-danger"
        />
        </>
    );
}

export default Test;