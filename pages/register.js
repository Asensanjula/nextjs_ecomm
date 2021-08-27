import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {rules} from "../Utility/formValidations";
import {postData} from "../Utility/fetchData";

const Register = () => {
    const {register,handleSubmit,errors,watch} = useForm({mode:"all"});

    const onSubmit = async (data)=>{
        console.log("register form data > ", data);

        const res = await postData('auth/register',data);
        if (res.err){
            alert(res.err);
        }else {
            alert("Success");
        }
    }

    return (
        <Container>
            <Head>
                <title>Register Page | The Shopper</title>
            </Head>
            <Row className="my-2">
                <Col md={{span:6, offset:3}}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="userName"
                                ref={register(rules().userName)}
                                isInvalid={errors.userName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.userName?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                ref={register(rules().email)}
                                isInvalid={errors.email}
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
                                type="password"
                                name="cu_Password"
                                ref={register(rules().cu_Password)}
                                isInvalid={errors.cu_Password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.cu_Password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="cf_password"
                                ref={register(rules(watch('cu_Password')).cf_password)}
                                isInvalid={errors.cf_password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.cf_password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="dark" type="submit" block>
                            Register
                        </Button>
                        <p className="my-2">Already have an account? <Link href="/signin"><a style={{color:"crimson"}}>Log In </a></Link> </p>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;
