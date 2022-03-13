import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import { AddCart } from '../../redux/action/actionCart';
import Header from '../Header/Header';
// import ListProduct from './ListProduct';
import ProductCard from './ProductCard';


const InfoProduct = () => {

    const { products } = useSelector(state => state.productReducer)
    const { id } = useParams()
    const productDetail = products.find(elt => elt._id === id);
    const { user } = useSelector(state => state.userReducer)
    const [quantity, setquantity] = useState(1)
    const productId=productDetail._id;
    console.log("id user", user._id, " productDetail", productDetail._id)
    const dispatch = useDispatch();
    const handlSubmit = (e) => {
        const newcart={userId:user._id,productId,quantity}
        e.preventDefault()
        dispatch(AddCart({userId:user._id,productId,quantity}))
        // alert("product is added")
    }

    return (
        <div>
            <Header />
            <div className='detail'>
                <div className="detail-image">
                    <img src={productDetail.imageUrl} alf="imga" width="450px" height="405px" />
                </div>
                <div className="box-detail">

                    <h4>{productDetail.title}</h4>

                    <span className='price'>{productDetail.price} <br /> TND</span>

                    <p className="card-text">{productDetail.description}</p>
                    <h6>{productDetail.category}</h6>
                    <Form className='form' onSubmit={handlSubmit}>
                        <input type="number" value={quantity} onChange={(e) => setquantity(e.target.value)} style={{ width: "3em", marginRight: "30px" }} />
                        <button type="submit">Buy</button>
                    </Form>


                    {productDetail.quantity > 0 ? (
                        <h6 style={{ color: "green", marginTop: "30px" }}>Available ({productDetail.quantity} in stock) </h6>
                    ) : (
                        <h6 style={{ color: "red", marginTop: "30px" }}>Out of stock </h6>
                    )}
                </div>
            </div>
            <div>
                <h3 style={{ marginLeft: "30px" }}> Related products</h3>
                <div className='products'>
                    {products.map(elt => {
                        return elt.category === productDetail.category ?
                            <ProductCard key={elt._id} product={elt} /> : null
                    })}
                </div>
            </div>


        </div>
    )
}

export default InfoProduct