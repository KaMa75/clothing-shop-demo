import React from 'react';

import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart';

import './checkoutItem.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
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
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{`${price}$`}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
