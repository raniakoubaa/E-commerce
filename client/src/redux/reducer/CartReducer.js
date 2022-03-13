import { ADD_CART, ADD_CART_FAIL, ADD_CART_SUCCESS, DELETE_CART, DELETE_CART_FAIL, DELETE_CART_SUCCESS, GET_CART, GET_CART_FAIL, GET_CART_SUCCESS } from "../actionType";

const initial = {
    cart: null,
    loading: false,
    error: null,
    isAuth: false,
}
export const cartReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case GET_CART:
        case ADD_CART:
        case DELETE_CART:
            return { ...state, loading: true };
        case GET_CART_FAIL:
        case ADD_CART_FAIL:
        case DELETE_CART_FAIL:
            return { ...state, loading: false, error: payload }
        case GET_CART_SUCCESS:
            return { ...state, loading: false, error: null, cart: payload ,isAuth:true}
        case ADD_CART_SUCCESS:
            return { ...state, loading: false, error: null, cart: [...state.cart, payload] }
        case DELETE_CART_SUCCESS:
            return {
                ...state, loading: false, error: null,
                cart: state.cart.filter(elt => elt._id !== payload)
            }
        default:
            return state;
    }
}