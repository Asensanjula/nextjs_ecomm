import '../styles/globals.css'
import Layout from "../Components/Layout";
import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Utility/fontawesome';
import {wrapper} from "../store/store";
import {getData} from "../Utility/fetchData";
import {loggers} from "redux-act";
import {useDispatch} from "react-redux";
import {setAuthAction} from "../store/reducers/authReducer";

function MyApp({Component, pageProps}) {

    const dispatch = useDispatch();
    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        console.log("FirstLogin > ", firstLogin);
        if (firstLogin){
            getData('auth/accessToken').then(res => {
                if (res.err) return localStorage.removeItem("firstLogin");

                dispatch(setAuthAction({
                    token:res.access_token,
                    user:res.user
                }))
            })
        }
    },[])
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default wrapper.withRedux(MyApp)
