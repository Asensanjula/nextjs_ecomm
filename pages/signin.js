import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {rules} from "../Utility/formValidations";
import {postData} from "../Utility/fetchData";
import {hideLoader, showLoader} from "../store/reducers/loadingReducer";
import {useDispatch} from "react-redux";
import Cookie from 'js-cookie';
import {setAuthAction} from "../store/reducers/authReducer";
import {useRouter} from "next/router";
import {notify} from "../store/reducers/notifyReducer";

const SignIn = () => {

    const {register, handleSubmit,errors,watch} = useForm({mode:"onSubmit"});
    const dispatch = useDispatch();
    const router = useRouter();
    const onSubmit = async (data) => {
        console.log("login Data > ", data);
        dispatch(notify({loading:true}))
        const res = await postData('auth/login', data);
        if (res.err){
            dispatch(notify({error:res.err}))
        }else {
            dispatch(notify({success:"Login Success!"}))
            router.push("/");

            dispatch(setAuthAction({
                token:res.access_token,
                user:res.user
            }));
            Cookie.set('refreshToken', res.refresh_token, {
                path: 'api/auth/accessToken',
                expires: 7
            });

            localStorage.setItem('firstLogin',true);

        }
    }

    return (
        <Container>
            <Head>
                <title>Sign In Page | The Shopper</title>
            </Head>
            <Row className="my-2">
                <Col md={{span:6, offset:3}}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                ref={register({required:{ value: true, message: "Email is required!" }})}
                                isInvalid={errors.email}
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                ref={register({required:{ value: true, message: "Password is required!" }})}
                                type="password"
                                placeholder="Password"
                                isInvalid={errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="dark" type="submit" block>
                            Login
                        </Button>
                        <p className="my-2">You don't have an account? <Link href="/register"><a style={{color:"crimson"}}>Register</a></Link> </p>
                    </Form>
                </Col>

            </Row>

        </Container>
    );
};

export default SignIn;
