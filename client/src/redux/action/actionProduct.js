import axios from 'axios'
import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_ONE_PRODUCT, GET_ONE_PRODUCT_FAIL, GET_ONE_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from '../actionType'

export const getProducts = ()=> async(dispatch)=>{
dispatch({type:GET_PRODUCT});
try {
    const res=await axios.get("/product/getAllProduct")
    dispatch({
        type:GET_PRODUCT_SUCCESS,
        payload:res.data
    })
} catch (error) {
    dispatch({
        type:GET_PRODUCT_FAIL,
        payload:error.response.data
    })
}
}
//get One Product
export const getOneProducts=(id)=>async(dispatch)=>{
    dispatch({type:GET_ONE_PRODUCT})
    try {
        const res=await axios.get(`/product/getOneProduct/${id}`)
        dispatch({
            type:GET_ONE_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_ONE_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
    }
// ADD Product
export const addProduct = (newProduct) => async(dispatch) => {
    dispatch({type:ADD_PRODUCT})
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    try {
        const res=await axios.post("/product/addProduct",newProduct,config)
        console.log("response",res.data)
        dispatch({
            type:ADD_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:ADD_PRODUCT_FAIL,
            payload: error.response.data
        })        
    }
}
//DELETE Product
export const deleteProduct=(id)=>async(dispatch)=>{
    dispatch({type:DELETE_PRODUCT})
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    try {
        const res=await axios.delete(`/product/deleteProduct/${id}`,config)
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
}
// Edit Product
export const ProductEdit = (editP) => async(dispatch)=>{
    dispatch({type: EDIT_PRODUCT})
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    }
    try {
        const res=await axios.put(`/product/editProduct/${editP._id}`,editP,config)
        dispatch({
            type:EDIT_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: EDIT_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
}