import React, { useEffect } from 'react'
import { Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, getUsers } from '../../redux/action/action';
import NavBarAdmin from './NavBarAdmin';
import "./admin.css"
import {MdDeleteSweep} from "react-icons/md"
const ListUsers = () => {
  const { users, loading } = useSelector(state => state.userReducer);
  // console.log(users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <NavBarAdmin />

      <div>
        <Table striped bordered hover className="tableuser"> 
          <tr>
            <th> Name </th>
            <th>Email</th>
            <th>Phone</th>
            <th> Address</th>
            <th><MdDeleteSweep size={25}/></th>
            
          </tr>
          {loading ? <Spinner animation="border" /> : users.map((elt,i) => {
            return (
              <tr key={i}>
                <td>{elt.fullName}</td>
                <td>{elt.email}</td>
                <td>{elt.phone}</td>
                <td>{elt.address}</td>
                <td><MdDeleteSweep size={25} className="btn-del-user" onClick={()=>dispatch(DeleteUser(elt._id))}/></td>
              </tr>
            )
          }
          )}
        </Table>
      </div>
    </div >
  )
}

export default ListUsers