import React, {useState} from 'react';
import {Toast} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ToastNotify({title,msg,handleClose, bgColor, iconName}) {
    const [show, setShow] = useState(true);

    const closeAction = () =>{
        setShow(false);
        if (handleClose) handleClose();
    }
    return (
        <Toast
            style={{
                position: 'absolute',
                top: 50,
                right:20,
                minWidth:"280px",
                zIndex:10
            }}
            show={show}
            delay={3000}
            autohide
            className={`${bgColor} text-light`}
            animation
            onClose={closeAction}
        >
            <Toast.Header  className={`${bgColor} text-light`}>
                <FontAwesomeIcon className="rounded mr-2" icon={iconName} />
                <strong className="mr-auto">{title}</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
        </Toast>
    );
}

export default ToastNotify;