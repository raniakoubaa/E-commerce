import React, { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { userProfile } from '../../redux/action/action'
import Header from '../Header/Header'
const Profile = () => {
    const {user,loading}= useSelector(state=>state.userReducer)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(userProfile())
    }, [])
   
  return (
    <div>
       <Header/>
   
    <div style={{marginTop:"100px",marginLeft:"50px"}}>
    {loading? <Spinner animation="border" className='spinner' /> : 
    <div>{ user&&<h1>{`Welcome ${user.fullName}`}</h1>}
    </div>
     }
     <br/>
     <h3> Your profil : </h3>
     <br/>
     <p>Informations</p>
     <Link to="/cart"><p>History and details of your orders (Cart)</p></Link>
     { user.userRole === "admin" ? 
     (<Link to="/admin"><Button variant="success"> Go to Admin </Button></Link>) : (<Link to="/custumer" ><Button variant="success"> Go to Product </Button> </Link>)}
     {/* <Navigate to="/admin"/>:<Navigate to="/custumer"/>} */}
    </div>
    </div>
  )
}

export default Profile