import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/action/actionProduct'
import AdminProductCard from './AdminProductCard ';
import './admin.css'
import NavBarAdmin from './NavBarAdmin';

const AdminListProduct = () => {
    const {products,loading}=useSelector(state=>state.productReducer)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getProducts())
      }, [])
    
  return (
    <div>
      <NavBarAdmin/>
    
    <div className='admin'>
       <h2> Admin </h2>
        {loading? <Spinner animation="border" /> : <div className='ListProduct'>
          {products.map((elt, i) => (
            <AdminProductCard product={elt} key={i} />
          ))}
        </div>
}
    </div>
    </div>
  )
}

export default AdminListProduct