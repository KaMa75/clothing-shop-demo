import { menuItems } from "../../data/menu-items"

const INITIAL_STATE = {
    sections: menuItems
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer;
