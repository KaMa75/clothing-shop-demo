import React from 'react';
import PropTypes, { array } from 'prop-types';
import { CartItem } from '../cartItem';
import { CustomButton } from '../customButton';

import { connect } from 'react-redux';

import './cartDropdown.scss';

const CartDropdown = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length > 0
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
                : 'Your cart is empty'}
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

CartDropdown.propTypes = {
    cartItems: array
}

export default connect(mapStateToProps)(CartDropdown);
