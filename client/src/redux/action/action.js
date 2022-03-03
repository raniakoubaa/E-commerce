import axios from "axios"
import {
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    LOGIN, LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS
} from "../actionType"

export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({
        type: SIGN_UP
    })
    try {
        const res = await axios.post("/user/signUp", newUser);
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL,
            payload: error.response.data
        })
    }
}
export const userLogin = (userL) => async (dispatch) => {
    dispatch({
        type: LOGIN
    })
    try {
        const res = await axios.post("/user/login", userL)
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })

    }
}
export const userProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE });
    const token = localStorage.getItem("token");
    console.log("token", token)
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const res = await axios.get("/user/get", config);
        // console.log(res.data)
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error.response.data
        })

    }
}