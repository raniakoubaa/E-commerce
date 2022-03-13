import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { DeleteCart, GetCart } from '../../redux/action/actionCart';
import Header from '../Header/Header';
import {BsHeartFill} from "react-icons/bs"
import {AiTwotoneDelete} from "react-icons/ai"
import './Cart.css'
const Cart = () => {
  const { user } = useSelector(state => state.userReducer)
  const {products}=useSelector(state=>state.productReducer)
  const { cart, loading } = useSelector(state => state.cartReducer)
  console.log(cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCart(user._id))
  }, [])
  var btnLike=document.getElementsByClassName('heart')
  for(var i=0;i<btnLike.length;i++){
      btnLike[i].addEventListener('click',color)
  }
  function color(event){
      var btnlik=event.target
      if(btnlik.style.color!=="red"){
      btnlik.style.color="red"
      }
      else
      {
          btnlik.style.color="black"
      }
  }
  return (
    <div>
      <Header/>
      <table>
            <tr>
            <th>Product</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th> </th>
            </tr>
            {/* {cart.items.length===0 ? <h2> pas de carte </h2> : <h1>ok</h1>} */}
      {loading ? <Spinner animation="grow" variant="success" /> :  
        cart.items.map((elt, i) =>  {
          return(
            
         <tr key={i}>
         <td><img src={products.find((prod,key)=>prod._id===elt.productId).imageUrl} alt="img" width="100px"/></td>
           <td><h5>{products.find((prod,key)=>prod._id===elt.productId).title}</h5></td>
         <td>{elt.quantity}</td>
         <td>{elt.price}</td>
         <td><BsHeartFill className='heart' onClick={color} size={20}/>
         <AiTwotoneDelete className='delete' size={25} onClick={()=>{dispatch(DeleteCart(user._id,elt.productId));dispatch(GetCart(user._id))}}/>
         </td>
       </tr>
          )
       }
      ) 
       
      }
      <tr style={{marginTop:"20px", borderTop:"1px solid"}}><td></td><td><h4 style={{marginTop:"20px"}}>Total:</h4></td><td>{cart.bill>0 ? cart.bill : 0}</td></tr>
       </table>
    </div>
  )
}

export default Cart