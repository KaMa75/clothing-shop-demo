import React from 'react';

import './checkoutItem.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}}) => {
    return (
        <div className='checkout-item'>
            <div className='image'>
                <div
                    className='image-container'
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{`${price}$`}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
