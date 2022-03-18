import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBarAdmin from '../Admin/NavBarAdmin';
import Header from '../Header/Header';
import LetteredAvatar from 'react-lettered-avatar';

const DetailUser = () => {
    const { id } = useParams();
    const { users } = useSelector(state => state.userReducer)
    const user = users.find(elt => elt._id === id);
    
  return (
    <div>
        {user.userRole === "admin"? <NavBarAdmin/> : <Header/>}
        <div className='card'>
      <div style={{display:'flex',marginLeft:"20px"}}>
         <LetteredAvatar
            name={user.fullName}
            color="white"
            backgroundColor="green"
        />
      <h3 style={{marginLeft:"20px"}}>{user.fullName}</h3>
      </div>
     <div style={{marginLeft:"100px"}}>
      <h5>{user.email}</h5>
      <h6>{user.phone}</h6>
      <h6>{user.address}</h6>
      <h5>{user.registerDate}</h5>
      <h6>{user.userRole}</h6>
      </div>
      <div className='buttons'>
      {/* <button onClick={()=>{dispatch(DeleteUser(user._id));dispatch(getUsers())}}>Delete</button>
      <EditUser user={user}/>
      <Link to={`/info/${user._id}`}> <button> Info </button></Link> */}
            
      </div>
    </div>
        </div>
  )
}

export default DetailUser