import React from 'react';
import NavBar from "./NavBar";
import {Container} from "react-bootstrap";

function Layout({children}) {
    return (
        <Container>
            <NavBar/>
            {children}
        </Container>
    );
}

export default Layout;