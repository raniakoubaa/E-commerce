import axios from "axios"
import { ADD_CART, ADD_CART_FAIL, ADD_CART_SUCCESS, DELETE_CART, DELETE_CART_FAIL, DELETE_CART_SUCCESS, GET_CART, GET_CART_FAIL, GET_CART_SUCCESS } from "../actionType"

export const GetCart = (userId)=> async(dispatch)=>{
 dispatch({
     type:GET_CART
 }) 
 const token = localStorage.getItem("token");
 const config = {
   headers: {
     Authorization: token,
   },
};
 try {
     const res=await axios.get(`/cart/getCart/${userId}`,config)
     dispatch({
         type: GET_CART_SUCCESS,
         payload:res.data
     })
     
 } catch (error) {
     dispatch({
         type:GET_CART_FAIL,
         payload:error.response.data
     })
 }
}
export const AddCart = (item,userId) => async(dispatch)=>{
dispatch({
    type:ADD_CART
})
const token = localStorage.getItem("token");
 const config = {
   headers: {
     Authorization: token,
   },
};
try {
  
    const res=await axios.post(`/cart/addCart/${userId}`,item,config)
    dispatch({
        type:ADD_CART_SUCCESS,
        payload:res.data
    })
} catch (error) {
    dispatch({
        type:ADD_CART_FAIL,
        payload:error.response.data
    })
}
}
export const DeleteCart = (userId,itemId) => async(dispatch)=>{
    dispatch({
        type:DELETE_CART
    })
    const token = localStorage.getItem("token");
 const config = {
   headers: {
     Authorization: token,
   },
};
    try {
        const res=await axios.delete(`/cart/deleteCart/${userId}/${itemId}`,config)
        dispatch({
            type:DELETE_CART_SUCCESS,
            payload:res.data
        })
        
    } catch (error) {
       dispatch({
           type:DELETE_CART_FAIL,
           payload:error.response.data
       }) 
    }
}
