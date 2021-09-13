import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CartItem({product}) {
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
            <td className="text-center align-middle">{product.qty}</td>
            <td className="text-center align-middle">$ {product.qty * product.price}</td>
            <td className="text-center align-middle"><FontAwesomeIcon icon='times'/></td>
        </tr>
    );
}

export default CartItem;