import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import {remove} from "../store/slices/cartSlice";
const Cart = () => {
  console.log("Rendering:Cart")

  const selectedProducts=useSelector((state)=>state.cart)
  const dispatch=useDispatch();

  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
      <h3 className='heading'>Cart</h3>
      <div className='productsWrapper'>
      {
        selectedProducts.map(prod=>(
          <div className='cartCard' key={prod.id}>
            <img src={prod.image} alt=''/>
            <h4 className='title-price'>{prod.title} </h4>
            <h5>$ {prod.price}</h5>
            <button className='btn' onClick={()=>{handleRemove(prod.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
           
          </div>
        ))
      }
      
      </div>

    </div>

  )
}

export default Cart