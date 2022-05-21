export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// export const decrease = (item) => {
//     return{
//         type: DECREASE,
//         payload: item
//     }
// };

// export const increase = (item) => {
//     return{
//         type: INCREASE,
//         payload: item
//     }
// };

export const remove = (item) => {
    return{
        type: REMOVE,
        payload: item
    }
};

export const clear_cart = () => {
    return{
        type: CLEAR_CART,
    }
};

export const get_totals = () => {
    return{
        type: GET_TOTALS,
    }
};

export const toggle_amount = (item) => {
    return{
        type: TOGGLE_AMOUNT,
        payload: item
    }
};