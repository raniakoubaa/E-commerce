import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/action/actionProduct';
import Header from '../Header/Header';
import Navbarcustomer from './Navbarcustomer'
import ProductCartCustomer from './ProductCartCustomer';

const ProductsCustomer = () => {
    const {products,loading}=useSelector(state=>state.productReducer)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getProducts())
      }, [])
  return (
    <div>
        <Header/>
        <div className='admin'>
        {loading? <Spinner animation="border"  className='spinner'/> : <div className='ListProduct'>
          {products.map((elt, i) => (
            <ProductCartCustomer product={elt} key={i} />
          ))}
        </div>
        }
        </div>
        </div>
  )
}

export default ProductsCustomer