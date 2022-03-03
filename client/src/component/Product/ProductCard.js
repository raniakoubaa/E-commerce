import React from 'react'
import { Link } from 'react-router-dom';
import {ImEye} from 'react-icons/im'

import "./product.css"
import { Card } from 'react-bootstrap';
  
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
   <Link to={`/info/${product._id}`}> <ImEye size={35} style={{ fill: 'black' }} className="eyes"/></Link>
  </Card.Body>
</Card>
  </div>
 
   )
}

export default ProductCard