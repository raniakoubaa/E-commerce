import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ProductEdit } from '../../redux/action/actionProduct';


const EditProduct = () => {
    const { products } = useSelector(state => state.productReducer)
    const { id } = useParams()
    const productEdit= products.find(elt => elt._id === id);
  const [title, settitle] = useState(productEdit.title)
  const [imageUrl, setimageUrl] = useState(productEdit.imageUrl)
  const [price, setprice] = useState(productEdit.price)
  const [category, setcategory] = useState(productEdit.category)
  const [description, setdescription] = useState(productEdit.description)
  const [quantity, setquantity] = useState(productEdit.quantity)
  const dispatch=useDispatch()
  
  const handlSubmit = (e)=>{
    const one={title,price,category,description,quantity,_id:productEdit._id};
      e.preventDefault();
      dispatch(ProductEdit(one))
      
  }
  return (
    <div>
         
                <form onSubmit={handlSubmit}>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
                    <input type="text"  value={price} onChange={(e)=>setprice(e.target.value)}/>
                    <input type="text"  value={description} onChange={(e)=>setdescription(e.target.value)}/>
                    <input type="text"  value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
                    <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)}/>
                   <Link to="/admin"><button type='submit'>Save</button></Link> 
                    <button type="reset">Annuler</button>
                </form>
            
    </div>
  )
}

export default EditProduct