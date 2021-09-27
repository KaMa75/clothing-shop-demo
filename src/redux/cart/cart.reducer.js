import { CartActionTypes } from './';

const INITIAL_STATE = {
    isHidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_VIEW:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return {
                state
            }
    }
}

export default cartReducer;
