import { CartActionTypes } from './';

export const toggleCartView = () => ({
    type: CartActionTypes.TOGGLE_CART_VIEW
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
