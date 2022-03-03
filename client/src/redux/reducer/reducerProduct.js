import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAIL
    , ADD_PRODUCT_SUCCESS
    , DELETE_PRODUCT
    , DELETE_PRODUCT_FAIL
    , DELETE_PRODUCT_SUCCESS,
    GET_ONE_PRODUCT,
    GET_ONE_PRODUCT_FAIL,
    GET_ONE_PRODUCT_SUCCESS,
    GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL, EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS
} from "../actionType";

const initial = {
    products: [],
    loading: false,
    error: null
}
export const productReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
        case GET_ONE_PRODUCT:
        case DELETE_PRODUCT:
            return { ...state, loading: true };
        case GET_PRODUCT_FAIL:
        case GET_ONE_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
            return { ...state, loading: false, error: payload }
        case GET_PRODUCT_SUCCESS:
        case GET_ONE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, products: payload }
        ///////: ADD product
        case ADD_PRODUCT:
            return { ...state, loading: true };
        case ADD_PRODUCT_FAIL:
            return { ...state, loading: false, error: payload }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, payload]
            }
        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, products: state.products.filter(elt => elt._id !== payload) }
        // Edit
        case EDIT_PRODUCT:
            return { ...state, loading: true }
        case EDIT_PRODUCT_FAIL:
            return { ...state, loading: false, error: payload }
        case EDIT_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: state.products.map(elt => elt._id === payload._id ? payload : elt) }

        default:
            return state;
    }
}