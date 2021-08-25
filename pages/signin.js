import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";

const SignIn = () => {
    return (
        <Container>
            <Head>
                <title>Sign In Page | The Shopper</title>
            </Head>
            <Row className="my-2">
                <Col md={{span:6, offset:3}}>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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
