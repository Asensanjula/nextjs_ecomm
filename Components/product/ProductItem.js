import React from 'react';
import {Button, Card} from "react-bootstrap";
import Link from "next/link";
import Row from "react-bootstrap/Row";

function ProductItem({product}) {

    const userLink = () => {
        return (
            <div className="d-flex justify-content-between">
                <Link href={`product/${product._id}`}>
                    <a className="btn btn-info mr-1 flex-fill">View</a>
                </Link>
                <Button variant="primary" className="ml-1 flex-fill">
                    Buy
                </Button>
            </div>
        )
    };

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
                {userLink()}
            </Card.Body>
        </Card>
    );
}

export default ProductItem;