import React from 'react';
import { CustomButton } from '../customButton';

import './cartDropdown.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-item' />
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
}

export default CartDropdown;
