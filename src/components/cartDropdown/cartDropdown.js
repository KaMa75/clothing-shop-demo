import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../cartItem';
import { CustomButton } from '../customButton';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart';

import './cartDropdown.scss';
import { EmptyState } from '../emptyState';

const CartDropdown = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>{
                cartItems.length > 0
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
                : <EmptyState>Your cart is empty</EmptyState>
            }</div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

CartDropdown.propTypes = {
    cartItems: PropTypes.array
}

export default connect(mapStateToProps)(CartDropdown);
