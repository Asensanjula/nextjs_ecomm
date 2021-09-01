import React from 'react';
import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import Loader from "./Loader";
import Head from "next/head";

function Layout({children}) {
    return (
        <Container>
            <Head>
                <title>The Shopper</title>
            </Head>
            <Loader/>
            <NavBar/>
            {children}
        </Container>
    );
}

export default Layout;