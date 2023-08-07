// All the logic-actions are written here

export const initialState = {
    basket: [],
};

// Selector

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
};

export default function reducer1(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                // only changing the basket-property of the state
                ...state,
                basket: [...state.basket, action.item],
                // In basket, adding the new-item
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: [
                    ...state.basket.filter((item) => item.id !== action.id),
                ],
            };
        default:
            // Do nothing
            return state;
    }
}
