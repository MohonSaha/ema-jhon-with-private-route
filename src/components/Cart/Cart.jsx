import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart, handleClearCart, children } = props;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;


    return (
        <div>
            <h2 className='order-title'>Order summary</h2>
            <div className='order-details'>
                <p>Selected Item: {quantity}</p>
                <p>Toral Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>


                <button onClick={handleClearCart}  className='btn btn-clear-cart'> <span>Clear Cart </span>
                    <FontAwesomeIcon className='clear-icon' icon={faTrashAlt} /></button>

                <button className='btn btn-proceed-cart'> <span>{children} </span>
                    <FontAwesomeIcon className='proceed-icon' icon={faTrashAlt} /></button>

            </div>
        </div>
    );
};

export default Cart;