import axios from "axios"
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
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const res = await axios.get("/user/get", config);
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
export const getUsers = () => async(dispatch) => {
    dispatch({type:GET_USER});
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const res=await axios.get("user/users",config)
        dispatch({
            type:GET_USER_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_USER_FAIL,
            payload:error.response.data
        })
    }
}
export const DeleteUser = (id) => async(dispatch) =>{
    dispatch({
        type:DELETE_USER
    })
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const res=await axios.delete(`/user/deleteUser/${id}`,config)
        dispatch({
            type:DELETE_USER_SUCCESS,
            payload:res.data
        })
    } catch (error) {
       dispatch({
           type:DELETE_USER_FAIL,
           payload:error.response.data
       }) 
    }
}