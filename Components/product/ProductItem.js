import React from 'react';
import {Button, Card} from "react-bootstrap";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction, removeFromCartAction} from "../../store/reducers/cartReducer";
import {notify} from "../../store/reducers/notifyReducer";

function ProductItem({product}) {

    const dispatch = useDispatch();
    const itemList = useSelector(state => state.cart.itemList);

    const checked = itemList.find(item => item._id === product._id);
    console.log("Checked > ", checked)
    const handleAddToCart = () => {
        dispatch(addToCartAction({...product,qty:1}));
        dispatch(notify({success:"Item Added to Cart!"}))
    }
    const handleRemoveFromCart = () => {
        dispatch(removeFromCartAction({product: {...product}, type:"ONE"}));
    }

    return (
        <Card className="productCard">
            <Card.Img variant="top" src={product.images[0].url} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-capitalize">{product.title}</Card.Title>
                <div className="d-flex justify-content-between">
                    <h6 className="text-danger">${product.price}</h6>
                    {
                        product.inStock > 0 ?
                            <h6 className="text-danger">In Stock: {product.inStock}</h6> :
                            <h6 className="text-danger">Out Of Stock</h6>
                    }

                </div>
                <Card.Text className="product__description text-left flex-fill">{product.description}</Card.Text>
                {
                    !checked &&
                    <div className="d-flex">
                        <Button variant="info" className="flex-fill" onClick={handleAddToCart}>
                            <FontAwesomeIcon icon='shopping-cart'/> Add to Cart
                        </Button>
                    </div>
                }
                {
                    checked &&
                    <div className="d-flex align-items-baseline quantitySelector">
                        <Button variant="info" className="flex-fill my-1 quantitySelector__minus" onClick={handleRemoveFromCart}><FontAwesomeIcon
                            icon='minus'/></Button>
                        <Button className="flex-fill my-1 quantitySelector__qty" disabled>{checked?.qty}</Button>
                        <Button variant="info" className="flex-fill my-1 quantitySelector__plus" onClick={handleAddToCart}><FontAwesomeIcon
                            icon='plus'/></Button>
                    </div>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductItem;