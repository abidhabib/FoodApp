import React,{useContext} from 'react'
import { CartContext } from '../pages/CartContext'
import {Link} from 'react-router-dom'
const Navigation = () => {
  const {cart} =useContext(CartContext)

  return (


<>
<div  style={{
     left: '0',
     height:'65px',
 
  backgroundColor: '#ebc340',
}}>
<nav className='container mx-auto flex items-center justify-between py-4'>
<Link to='/'>

<img  style={{marginTop:10}}  src="/images/logo.png" alt="" />
</Link>

<ul className='flex items-center '>
  <li className='ml-4'>
    <Link to='/'>Home</Link>
  </li>
  <li className='ml-4'>
    <Link to='/products'>Products</Link>
  </li>
  <li className='ml-4'>
    <Link to= '/cart'> 
    <div style={{
      border:'1px solid #585541',
      padding:'1px',
      display:'flex',
      marginLeft:'10px'
    }}>
    <span className='mr-2'>{cart.totalItems}</span>
    <img src="/images/cart.png" alt="" />
    </div>
    </Link>
  </li>
</ul>
  </nav>
  </div>
</>


    )
}

export default Navigation