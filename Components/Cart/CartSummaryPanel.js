import React from 'react';
import {useSelector} from "react-redux";

function CartSummaryPanel() {

    const productList = useSelector(state => state.cart.itemList);
    const deliveryCharge = 10;
    let subtotal = 0;
    productList.forEach(item => {
        subtotal = subtotal + item.price * item.qty;
    })
    return (
        <>
        <div className="cart-summary d-flex flex-column p-3">
            <div className="summary_detail d-flex justify-content-between border-bottom">
                <p>Item Count</p>
                <p>{productList?.length}</p>
            </div>

            <div className="summary_detail d-flex justify-content-between border-bottom">
                <p>Subtotal</p>
                <p>$ {subtotal}</p>
            </div>

            <div className="summary_detail d-flex justify-content-between border-bottom">
                <p>Delivery Charges</p>
                <p>$ {deliveryCharge}</p>
            </div>
        </div>
            <div className="totalAmount d-flex justify-content-between mt-2 p-3 text-light">
                <p>Total</p>
                <p>$ {subtotal + deliveryCharge}</p>
            </div>
            </>
    );
}

export default CartSummaryPanel;