import React from 'react';

import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart';

import './checkoutItem.scss';

const CheckoutItem = ({cartItem, clearItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
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
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
