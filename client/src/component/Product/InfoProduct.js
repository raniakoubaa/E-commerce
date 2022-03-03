import React from 'react'
import { useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import ListProduct from './ListProduct';
import ProductCard from './ProductCard';


const InfoProduct = () => {

    const { products } = useSelector(state => state.productReducer)
    const { id } = useParams()
    const productDetail = products.find(elt => elt._id === id);

    return (
        <div>
            <div className='detail'>
                <div className="detail-image">
                    <img src={productDetail.imageUrl} alf="imga" width="450px" height="405px" />
                </div>
                <div className="box-detail">

                    <h4>{productDetail.title}</h4>

                    <span className='price'>{productDetail.price} <br/> TND</span>
                    
                    <p className="card-text">{productDetail.description}</p>
                    <h6>{productDetail.category}</h6>
                    <input type="number" value="1"  style={{width: "3em",marginRight:"30px"}}/>
                  
                    <Link to="/cart" className='cart'><p className='panier'>Ajouter au panier</p></Link>
                </div>
            </div>
            <div>
                <h3 style={{marginLeft:"30px"}}> Related products</h3>
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