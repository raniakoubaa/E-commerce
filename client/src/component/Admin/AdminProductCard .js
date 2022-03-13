import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../redux/action/actionProduct';
import EditProduct from './EditProduct';

const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <h5>{product.title}</h5>
          <Card.Text>
            {product.price} TND
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(deleteProduct(product._id));dispatch(getProducts())}}>DELETE</Button>
          <Link to={`/edit/${product._id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminProductCard 