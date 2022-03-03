import React, { useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { userLogin } from '../../redux/action/action'

import './user.css'

const LoginPage = () => {
    const {user,loading}= useSelector(state=>state.userReducer)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch()
    const HandelSubmit=(e)=>{
        e.preventDefault()
        dispatch(userLogin({email,password}))
    }
   
  return (
   
        <div className='SignUp'>
            <div className='signup_image'>
                <img alt='signUp' src="https://1819.brussels/sites/default/files/styles/image_style_1_2_landscape_xs_wide/public/eighteennineteen/galleries/e-commerce_women_card_computer_achat.jpg?itok=-b5nXIG9" className='imagSinup' />
            </div>
            <div className='signup_formulaire'>
                <h3>Login</h3>
            { loading? <Spinner animation="border" className='spinner'/> :
             localStorage.getItem("token") ?  <Navigate to="/profil"/>
           :
            <Form className='form_SignUp'>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Col>
                        </Form.Group>
                       
                        <Button variant="primary" onClick={HandelSubmit}>Saving</Button>
                        <div style={{marginTop:"30px", marginLeft:"120px"}}><h6>Don't have account ?</h6> <Link to="/signup"><p style={{ marginLeft:"40px"}}> Sign In </p></Link></div>
            </Form>
              }
              </div>
        </div>
  )
}

export default LoginPage