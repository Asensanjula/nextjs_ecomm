import React from 'react';
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import Link from "next/link";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartItem from "../Components/Cart/CartItem";
import CartSummaryPanel from "../Components/Cart/CartSummaryPanel";

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <>
            {
                cart.itemList.length === 0 &&
                <Card className="emptyCard flex-fill">
                    <Card.Img variant="top" src="/images/emptyCart.svg"/>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="text-capitalize text-center">Empty Cart</Card.Title>
                        <Card.Text className="emptyCard__text text-center flex-fill">Your shopping cart is
                            empty.</Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link href="/"><Button variant="info" className="flex-fill">
                                Continue Shopping
                            </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            }
            {
                cart.itemList.length > 0 &&
                <Row className="my-2">
                    <Col  md={8}>
                        <Table  hover borderless responsive className="cartItemTable border-bottom">
                            <thead>
                            <tr >
                                <th className="">Product Name</th>
                                <th className="text-center align-middle ">Price</th>
                                <th className="text-center align-middle">Qty</th>
                                <th className="text-center align-middle ">Total</th>
                                <th className="text-center align-middle ">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.itemList.map(item => (
                                    <CartItem key={item._id} product={item}/>
                                ))
                            }
                            </tbody>
                        </Table>
                    </Col>
                    <Col  md={4}>
                        <CartSummaryPanel/>
                    </Col>
                </Row>

            }
        </>
    );
};

export default Cart;
