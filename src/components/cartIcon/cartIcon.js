import React from 'react';
import { connect } from 'react-redux';
import { toggleCartView } from '../../redux/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIcon.scss';

const CartIcon = ({toggleCartView}) => {
    return (
        <div className='cart-icon' onClick={toggleCartView}>
            <ShoppingIcon className='shopping-icon' />
            <span className='items-count'>0</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
});

export default connect(null, mapDispatchToProps)(CartIcon);
