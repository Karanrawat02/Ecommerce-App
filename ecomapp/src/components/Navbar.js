import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const items =useSelector((state)=> state.cart);
  return (
    <div style={{display:"flex" , alignItems:"center" ,textDecoration:"none",justifyContent:"space-between"}}>
        <span className='logo'>REACT STORE</span>

            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className='cartCount'>Product:{(new Set(items)).size}</span>
                <span className='cartCount'>Cart Items :{items.length}</span>
                {/* console.log(items) */}

            </div>
    </div>
  )
}

export default Navbar;