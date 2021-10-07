import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { CartItem } from '../cartItem';
import { CustomButton } from '../customButton';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart';
import { toggleCartView } from '../../redux/cart';

import './cartDropdown.scss';
import { EmptyState } from '../emptyState';

const CartDropdown = ({cartItems, toggleCartView, history}) => {
    const handleClick = () => {
        toggleCartView();
        history.push('/checkout');
    }
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>{
                cartItems.length > 0
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
                : <EmptyState>Your cart is empty</EmptyState>
            }</div>
            <CustomButton onClick={handleClick}>Go to checkout</CustomButton>
        </div>
    );
}

CartDropdown.propTypes = {
    cartItems: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
