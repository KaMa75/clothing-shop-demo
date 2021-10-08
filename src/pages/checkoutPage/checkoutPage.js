import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux';

import { CheckoutItem } from '../../components/checkoutItem';
import { EmptyState } from '../../components/emptyState';

import './checkoutPage.scss';

const CheckoutPage = ({cartItems, totalPrice}) => {

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    Product
                </div>
                <div className='header-block'>
                    Description
                </div>
                <div className='header-block'>
                    Quantity
                </div>
                <div className='header-block'>
                    Price
                </div>
                <div className='header-block'>
                    Remove
                </div>
            </div>
            <div>
                {
                    cartItems.length
                    ? cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                    : <EmptyState>There is no products to checkout</EmptyState>
                }
            </div>
            <div className='total-price'>{`Total price: ${totalPrice}$`}</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
