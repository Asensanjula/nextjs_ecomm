import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import {addToCartAction, removeFromCartAction} from "../../store/reducers/cartReducer";
import {useDispatch} from "react-redux";
import {notify} from "../../store/reducers/notifyReducer";

function CartItem({product}) {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCartAction({product: {...product}, type:"ALL"}));
    }
    const handleRemoveOneFromCart = () => {
        dispatch(removeFromCartAction({product: {...product}, type:"ONE"}));
    }

    const handleAddToCart = () => {
        dispatch(addToCartAction({...product,qty:1}));
    }
    return (
        <tr className="cart-item">
            <td>
                <img
                    className="cart-item__img mr-2"
                    src={product.images[0].url}
                    alt=""
                />
                <span className="text-center text-wrap">{product.title}</span>
            </td>
            <td className="text-center align-middle">$ {product.price}</td>
            <td className="text-center align-middle itemQty">
                <Button className="bg-transparent btn-outline-primary border-0 mr-1"  onClick={handleRemoveOneFromCart}><FontAwesomeIcon icon='minus'/></Button>
                <span>{product.qty}</span>
                <Button className="bg-transparent btn-outline-primary border-0 ml-1"  onClick={handleAddToCart}><FontAwesomeIcon icon='plus'/></Button>
            </td>
            <td className="text-center align-middle">$ {product.qty * product.price}</td>
            <td className="text-center align-middle">
                <Button variant="info" onClick={handleRemoveFromCart}><FontAwesomeIcon icon='times'/></Button>
            </td>
        </tr>
    );
}

export default CartItem;