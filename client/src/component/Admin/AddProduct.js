import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/action/actionProduct';
import NavBarAdmin from './NavBarAdmin';

const AddProduct = () => {

    const [title, settitle] = useState("")
    const [imageUrl, setimageUrl] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [quantity, setquantity] = useState("0")
    const dispatch = useDispatch()
    const handlSubmit = (e) => {
        e.preventDefault()
        const newProduct={title, imageUrl,category, price, description,quantity}
        dispatch(addProduct(newProduct))
        settitle("")
        setimageUrl("")
        setprice("")
        setcategory("")
        setdescription("")
    }
    return (
        <div>
           <NavBarAdmin/>
    
                    <Form onSubmit={handlSubmit}  className='Addproduct'>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Title :
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Image :
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" placeholder="image" value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Price :
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="number" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Description :
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control  as="textarea" rows={3} placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label> Quantity</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="number" placeholder="Quantity" value={quantity} 
                                onChange={(e) => setquantity(e.target.value)} 
                                style={{ width: "5em" }}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label style={{marginRight:"120px"}}>Category </Form.Label>
                            <Form.Select value={category} onChange={(e)=>setcategory(e.target.value)}>
                                <option>Choose...</option>
                                <option value="iphone">Iphone</option>
                                <option value="ipad">Ipad</option>
                                <option value="Mac">Mac</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">
                            Save
                        </Button>
                        
                    </Form>
                {/* </Modal.Body>
            </Modal> */}
        </div >
    )
}

export default AddProduct