import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import Link from "next/link";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        cart.itemList.length === 0 &&
        // <div className="cart__empty">
        //     <div className="cart__icon d-flex justify-content-center">
        //         <img className="cart__emptyImage " src="/images/emptyCart.svg" alt="empty-image-cart"/>
        //     </div>
        //     <div className="cart__empty__text">
        //         <h5 className="text-secondary my-3 text-center">Your shopping cart is empty.</h5>
        //     </div>
        //     <Link href="/">
        //         <Button className="text-light" variant="info" block>Continue Shopping</Button>
        //     </Link>
        //
        // </div>
        <Card className="emptyCard flex-fill">
            <Card.Img variant="top" src="/images/emptyCart.svg" />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-capitalize text-center">Empty Cart</Card.Title>
                <Card.Text className="emptyCard__text text-center flex-fill">Your shopping cart is empty.</Card.Text>
                <div className="d-flex justify-content-between">
                    <Link href="/"><Button variant="info" className="flex-fill">
                        Continue Shopping
                    </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Cart;
