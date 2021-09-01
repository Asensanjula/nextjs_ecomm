import React from 'react';
import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import Loader from "./Loader";

function Layout({children}) {
    return (
        <Container>
            <Loader/>
            <NavBar/>
            {children}
        </Container>
    );
}

export default Layout;