import {
    DELETE_USER,
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOGIN, LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS
} from "../actionType";

const initial = {
    user: null,
    users:[],
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
        case GET_USER:
            case DELETE_USER:
            return { ...state, loading: true }
        case SIGN_UP_FAIL:
        case LOGIN_FAIL:
        case GET_PROFILE_FAIL:
        case GET_USER_FAIL:
            case DELETE_USER_FAIL:
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
        case GET_USER_SUCCESS:
            return { ...state, loading: false, users: payload, error: null }
            case DELETE_USER_SUCCESS:
                return {...state, loading:false,error:null, users: state.users.filter(elt => elt._id !== payload)}
        default:
            return state;
    }
}