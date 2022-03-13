import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/action/actionProduct';
import Header from '../Header/Header';
import ProductCard from './ProductCard';

const Iphone = () => {
    const {products,loading}=useSelector(state=>state.productReducer)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getProducts())
      }, [])
  return (
    <div>
        <Header/>
             {loading? <Spinner animation="border" /> : <div className='ListProduct'>
             {products.map((elt,i) => {
                        return elt.category === "iphone" ?
                            <ProductCard product={elt} key={i} /> : null
                    })}
        </div>
}
    </div>
  )
}

export default Iphone
