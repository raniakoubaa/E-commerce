import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Edit_Product, getProducts } from '../../redux/action/actionProduct';

const EditProduct = () => {
    const { products } = useSelector(state => state.productReducer)
    const { id } = useParams()
    const productE= products.find(elt => elt._id === id);
  const [title, settitle] = useState(productE.title)
  const [imageUrl, setimageUrl] = useState(productE.imageUrl)
  const [price, setprice] = useState(productE.price)
  const [category, setcategory] = useState(productE.category)
  const [description, setdescription] = useState(productE.description)
  const [quantity, setquantity] = useState(productE.quantity)
  const dispatch=useDispatch()
  
  const handlSubmit = (e)=>{
    const one={title,imageUrl,price,category,description,quantity,_id:productE._id};
      e.preventDefault();
      dispatch(Edit_Product(one))
      
  }
  return (
    <div>
          <div className='edit'>
        <div className="detail-image">
          <img src={productE.imageUrl} alf="imga" width="450px" height="405px" />
        </div>
        <div className='editProduct'>
          <Form onSubmit={handlSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">Title </Form.Label>
              <Col sm="10">
              <Form.Control type="text" value={title} onChange={(e) => settitle(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label  column sm="2">
                Category
                </Form.Label>
              <Col sm="10">
              <Form.Select value={category} onChange={(e)=>setcategory(e.target.value)} style={{paddingLeft:"20px"}}>
                                <option>Choose...</option>
                                <option value="iphone">Iphone</option>
                                <option value="ipad">Ipad</option>
                            </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label  column sm="2">Price </Form.Label>
              <Col sm="10">
              <Form.Control type="text"  value={price} onChange={(e) => setprice(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label  column sm="2"> Quantity</Form.Label>
              <Col sm="10">
              <Form.Control type="number" value={quantity} onChange={(e) => setquantity(e.target.value)} size={2}/>
              </Col>
             
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
            <Col sm="10">
              <Form.Label  column sm="2">Description</Form.Label>
              <Form.Control as="textarea" rows={3}  value={description} onChange={(e) => setdescription(e.target.value)}/>
            </Col>
            </Form.Group>
           <button type='submit'>Save</button>
        <button type="reset">Annuler</button>
          </Form>
        </div>
      </div>
            
    </div>
  )
}

export default EditProduct