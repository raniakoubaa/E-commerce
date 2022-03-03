import {
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    LOGIN, LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS
} from "../actionType";

const initial = {
    user: null,
    loading: false,
    error: null,
    isAuth: false,
    token: localStorage.getItem("token")
}
export const userReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case SIGN_UP:
        case LOGIN:
        case GET_PROFILE:
            return { ...state, loading: true }
        case SIGN_UP_FAIL:
        case LOGIN_FAIL:
        case GET_PROFILE_FAIL:
            return { ...state, loading: false, error: payload }
        case SIGN_UP_SUCCESS:
            return { ...state, loading: false, user: payload, error: null }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: payload.user,
                token: payload.token,
                isAuth: true
            }
        case GET_PROFILE_SUCCESS:
            return { ...state, loading: false, user: payload, errors: null }
        default:
            return state;
    }
}