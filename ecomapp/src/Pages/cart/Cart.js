import React, { useDebugValue } from 'react';
import Products from '../../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../Store/cartSlice';

function Cart(){
  const dispatch =useDispatch();
  const products= useSelector((state) => state.cart)
  const handleRemove=(productId)=> {
    dispatch(remove(productId));

  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        { products.map(products => (
          <div className='cartCard'>
          <img src={products.image} alt="" />
          <h5>{products.title}</h5>
          <h5>{products.price}</h5>
          <span>{products.id.quantity}</span>
          <button onClick={()=> handleRemove(products.id)} className="btn">Remove</button>
          
          </div>
        ))

        }
      </div>
    </div>
  );
}

export default Cart;
