import { CartActionTypes } from './';

export const toggleCartView = () => ({
    type: CartActionTypes.TOGGLE_CART_VIEW
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CARD,
    payload: item
});
