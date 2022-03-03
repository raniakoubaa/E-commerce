import React, { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userProfile } from '../../redux/action/action'
const Profile = () => {
    const {user,loading}= useSelector(state=>state.userReducer)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(userProfile())
    }, [])
   
  return (
    <div style={{marginTop:"100px",marginLeft:"50px"}}>
    {loading? <Spinner animation="border" /> : 
    <div>{ user&&<h1>{`Welcome ${user.fullName}`}</h1>}
    </div>
     }
     <br/>
     <h3> Your profil : </h3>
     <br/>
     <p>Informations</p>
     <p>History and details of your orders </p>
     { user.userRole === "admin" ? 
     (<Link to="/admin"><Button variant="success"> Go to Profil of admin </Button></Link>) : null}
    </div>
  )
}

export default Profile