import React from 'react';
import {Button, Card} from "react-bootstrap";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {addToCartAction} from "../../store/reducers/cartReducer";

function ProductItem({product}) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCartAction(product));
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
                <div className="d-flex justify-content-between">
                    {/*<Link href={`product/${product._id}`}>*/}
                    {/*    <a className="btn btn-info mr-1 flex-fill">View</a>*/}
                    {/*</Link>*/}
                    <Button variant="info" className="flex-fill" onClick={handleAddToCart}>
                        <FontAwesomeIcon icon='shopping-cart'/> Add to Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductItem;