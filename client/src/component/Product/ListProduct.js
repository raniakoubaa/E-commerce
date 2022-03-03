import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/action/actionProduct'

import "./product.css"

import ProductCard from './ProductCard'

const ListProduct = () => {
    const {products,loading}=useSelector(state=>state.productReducer)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getProducts())
      }, [])
    
  return (
    <div>
     {loading? <Spinner animation="border" /> : <div className='ListProduct'>
          {products.map((elt, i) => (
            <ProductCard product={elt} key={i} />
          ))}
        </div>
}
    </div>
  )
}

export default ListProduct