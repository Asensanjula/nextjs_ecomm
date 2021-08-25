import '../styles/globals.css'
import Layout from "../Components/Layout";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Utility/fontawesome';

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
