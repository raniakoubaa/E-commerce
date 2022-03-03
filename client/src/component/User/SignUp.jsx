import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import './user.css'
import { Link, Navigate } from "react-router-dom"
import { userSignUp } from '../../redux/action/action'
import PasswordStrengthBar from 'react-password-strength-bar';

const SignUp = () => {
    const { user, loading } = useSelector(state => state.userReducer)
    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [errorPassword, seterrorPassword] = useState("")
    const [errorEmail, seterrorEmail] = useState("")
    const [errorName, seterrorName] = useState("")
    // const [userRole, setuserRole] = useState("")
    const dispatch = useDispatch()
    const TestPassword=()=>{
       
    }
   
    const HandelSubmit = (e) => {
        if (!fullName)
        seterrorName("Name is empty !!!!")
        if (!email)
        seterrorEmail("Email is empty !!!!")   
        if (password.length < 6) {
            seterrorPassword('Password must 6 chars long');
          }else
          if (!password)
          seterrorPassword("password is empty !!!!")
          else
          seterrorPassword("") 
       const userRole='user'
        e.preventDefault()
        dispatch(userSignUp({ fullName, email, password, phone, address, userRole }))

    }
    return (
        <div className='SignUp'>
            <div className='signup_image'>
                <img alt='signUp' src="https://1819.brussels/sites/default/files/styles/image_style_1_2_landscape_xs_wide/public/eighteennineteen/galleries/e-commerce_women_card_computer_achat.jpg?itok=-b5nXIG9" className='imagSinup' />
            </div>
            <div className='signup_formulaire'>
                <h3>Create your account</h3>
                {loading ? <Spinner animation="border" className='spinner' />
                    :
                    <Form className='form_SignUp'>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                <div style={{ display: "flex" }}>Name <p style={{ color: "red" }}>  *</p></div>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup"  required
                                    type="text" placeholder="Full name"
                                    value={fullName} onChange={(e) => setfullName(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                <p style={{color:"red", marginLeft:"30px"}}>{errorName}</p>
                                </Form.Text>
                            </Col>
                           
                        </Form.Group >
                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Form.Label column sm="2">
                                <div style={{ display: "flex" }}>Email <p style={{ color: "red" }}>  *</p></div>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup"
                                    type="email" placeholder="name@example.com"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                <p style={{color:"red", marginLeft:"30px"}}>{errorEmail}</p>
                                </Form.Text>
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                <div style={{ display: "flex" }}> Password <p style={{ color: "red" }}>  *</p></div>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Form.Text className="text-muted"><p style={{color:"red", marginLeft:"20px"}}>{errorPassword}</p></Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Phone
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup" type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className="input-signup" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Col>
                        </Form.Group>
                        {/* <PasswordStrengthBar password={password} minLength={1}
            onChangeScore={(score, feedback) => {
              console.log(score, feedback)  }}/> */}
                        {/* <div style={{ display: "flex", marginLeft: "110px" }}>
                            <div>
                                <input type="radio" name="role"
                                    value="user" />
                                <label>User</label>
                            </div>

                            <div>
                                <input type="radio" name="role" value="admin" />
                                <label>Admin</label>
                            </div>
                        </div> */}

                        <Button variant="primary" onClick={HandelSubmit}>Sign In</Button>
                    </Form>
                }
                <div style={{ marginLeft: "100px", display: "flex" }} ><h6> Do you have account ?</h6><Link to="/login"><p style={{ marginLeft: "10px" }}>go to Login</p></Link></div>
            </div>
        </div>
    )
}

export default SignUp