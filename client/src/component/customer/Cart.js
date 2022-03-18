import React, { useEffect, useRef, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as paypalCheckout from "braintree-web/paypal-checkout";
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, GetCart } from '../../redux/action/actionCart';
import Header from '../Header/Header';
import {BsHeartFill} from "react-icons/bs"
import {AiTwotoneDelete} from "react-icons/ai"
import './Cart.css'
const Cart = () => {
  //paypal
  const [payPalInstance, setPayPalInstance] = useState(false);

  const createBillingAgreement = () => {
    return payPalInstance.createPayment({
      flow: "vault"
    });
  };

  const onApprove = (data) => {
    return payPalInstance.tokenizePayment(data).then((payload) => {
      console.log("Payload & nonce", payload);
    });
  };

  useEffect(() => {
    paypalCheckout
      .create({ authorization: "sandbox_w3yd874v_7b4b2w6nhvfxq3w5" })
      .then((instance) => {
        setPayPalInstance(instance);
      });
  }, []);
  // cart
  const { user } = useSelector(state => state.userReducer)
  const {products}=useSelector(state=>state.productReducer)
  const { cart, loading } = useSelector(state => state.cartReducer)
  // console.log(cart)
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
     
            {/* {cart.items.length===0 ? <h2> pas de carte </h2> : <h1>ok</h1>} */}
      {loading ? <Spinner animation="grow" variant="success" /> :  
       !cart ? <h1 style={{color:"green", margin:"200px 500px"}}> Carte is Empty</h1> :(
        <table>
        <tr>
        <th>Product</th>
        <th>Product name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th> </th>
        </tr>
        {
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
      ) 
       
      }
     <div style={{margin:"40px 250px"}}>
     <PayPalScriptProvider
        options={{ "client-id": "sb", vault: true, intent: "tokenize" }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          fundingSource="paypal"
          createBillingAgreement={createBillingAgreement}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
     </div>
    </div>
  )
}

export default Cart