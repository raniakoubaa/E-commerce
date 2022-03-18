import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Edit_Product} from '../../redux/action/actionProduct';
import NavBarAdmin from './NavBarAdmin';

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
       <NavBarAdmin/>
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
            <Form.Group as={Row} className="mb-3" >
              <Form.Label  column sm="2" style={{paddingRight:"120px"}}>
                Category
                </Form.Label>
              <Col sm="10" style={{paddingLeft:"120px"}}>
              <Form.Select value={category} onChange={(e)=>setcategory(e.target.value)} style={{width:"150px"}} >
                                <option>Choose...</option>
                                <option value="iphone">Iphone</option>
                                <option value="ipad">Ipad</option>
                                <option value="Mac">Mac</option>
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
              <Form.Control type="number" value={quantity} onChange={(e) =>setquantity(e.target.value)} size={2}/>
              </Col>
             
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label  column sm="2">Description</Form.Label>
              <Col sm="10"  style={{paddingLeft:"30px"}}>
              <Form.Control as="textarea" rows={3}  value={description}
               onChange={(e) => setdescription(e.target.value)}
               style={{width:"400px"}}/>
            </Col>
            </Form.Group>
           <Button variant="outline-success" type='submit' style={{marginLeft:"100px"}}>Save Modification</Button>
          </Form>
        </div>
      </div>
            
    </div>
  )
}

export default EditProduct