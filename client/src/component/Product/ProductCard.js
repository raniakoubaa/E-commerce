import React from 'react'
import { Link } from 'react-router-dom';
import {ImEye} from 'react-icons/im'

import "./product.css"
import { Card } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
  
const ProductCard = ({product}) => {
  
  return (
  <div className='CardProduct'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.imageUrl} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      {product.price} TND
    </Card.Text>
   <div style={{display:"flex",marginLeft:"80px"}}>
   <Link to={`/info/${product._id}`}> <ImEye size={30} style={{ fill: 'black',marginRight:"20px" }} className="eyes"/></Link>
   {localStorage.getItem("token") ?
    (<Link to="/cart"><FaCartPlus size={30} style={{ fill: 'black' }}/> </Link>)
    : (<Link to="/login"><FaCartPlus size={30} style={{ fill: 'black' }}/> </Link>)
  }
   </div>
  </Card.Body>
</Card>
  </div>
 
   )
}

export default ProductCard