import React from 'react';
import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import Loader from "./Loader";
import Head from "next/head";
import Notify from "./Notify";

function Layout({children}) {
    return (
        <Container>
            <Head>
                <title>The Shopper</title>
            </Head>
            <Notify/>
            <NavBar/>
            {children}
        </Container>
    );
}

export default Layout;