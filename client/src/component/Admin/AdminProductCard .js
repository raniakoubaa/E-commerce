import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../redux/action/actionProduct';
import {MdOutlineUpdate} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"


const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>

      <Card style={{ width: '14rem', margin:"10px"}}>
       <Link to={`/info/${product._id}`}><Card.Img variant="top" src={product.imageUrl} /></Link> 
        <Card.Body style={{marginLeft:"30px"}}>
          <h5>{product.title}</h5>
          <Card.Text>
            {product.price} TND
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(deleteProduct(product._id));dispatch(getProducts())}} style={{backgroundColor:"black"}}>
            <RiDeleteBin6Line size={25}/></Button>
          <Link to={`/edit/${product._id}`}>
            <Button variant="primary" style={{backgroundColor:"black"}}><MdOutlineUpdate size={25}/></Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminProductCard 