import '../styles/globals.css'
import Layout from "../Components/Layout";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Utility/fontawesome';
import {wrapper} from "../store/store";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default wrapper.withRedux(MyApp)
