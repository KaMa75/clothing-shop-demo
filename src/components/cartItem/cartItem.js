import React from 'react';
import PropTypes from 'prop-types';

import './cartItem.scss';

const CartItem = ({imageUrl, name, price, quantity}) => {

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='' />
            <div className='item-details'>
                <div className='name'>{name}</div>
                <div className='price'>{quantity} x {price}$</div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem;
