import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';

const ProductCartCustomer = ({ product }) => {
  return (
    <div  className='CardProduct'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <h5>{product.title}</h5>
          <Card.Text>
            {product.price} TND
          </Card.Text>
          <div style={{ display: "flex", marginLeft: "80px" }}>
            <Link to={`/info/${product._id}`}> <ImEye size={30} style={{ fill: 'black', marginRight: "20px" }} className="eyes" /></Link>
            <Link to="/cart"><FaCartPlus size={30} style={{ fill: 'black' }} /></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCartCustomer