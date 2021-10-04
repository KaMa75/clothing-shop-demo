import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart';
import { toggleCartView } from '../../redux/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIcon.scss';

const CartIcon = ({toggleCartView, itemsCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartView}>
            <ShoppingIcon className='shopping-icon' />
            <span className='items-count'>{itemsCount}</span>
        </div>
    );
}

const mapStateToProps = store => ({
    itemsCount: selectCartItemsCount(store)
});

const mapDispatchToProps = dispatch => ({
    toggleCartView: () => dispatch(toggleCartView())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
