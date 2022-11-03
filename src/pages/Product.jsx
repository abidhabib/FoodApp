import React,{useContext,useState} from 'react'
import { CartContext } from '../pages/CartContext'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const [isAdd,setIsAdd]=useState(false)

  const {cart,setCart} =useContext(CartContext)
  const { product } = props
  console.log(product)
  const prodStyle = {

backgroundColor: 'white',
border: '1px solid white',
borderRadius: '5px',
  }
  const addToCart=(event,product)=>{
    event.preventDefault(); 
  let _cart={...cart}

/// Imp ///////
  if(!_cart.items){
    _cart.items={}
  }
  if(_cart.items[product._id]){
    _cart.items[product._id]+=1
  }else{
    _cart.items[product._id]=1
    
  }
  if(!_cart.totalItems){
    _cart.totalItems=0
  }  _cart.totalItems+=1
  setCart(_cart)
/// Imp ///////
setIsAdd(true)
setTimeout( ()=>{setIsAdd(false)},2000) 
  }

  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div  className='drop-shadow-2xl hover:drop-shadow-lg' style={prodStyle}>
          <div className='flex justify-around '>
            <img src={product.image} alt="" />
          </div>
          <div className='text-center'>

            <h6 className='text-lg font-bold py-2 text-center'>{product.name}</h6>
            <span className='bg-gray-200 px-4  rounded-full text-sm'  >{product.size}</span>
          </div>
          <div className='flex justify-around items-center mt-4'>
            <span>Rs:{product.price}</span>
            <button 
            disabled={isAdd}
            onClick={(e)=>addToCart(e,product)}
            className={`${
              isAdd ? 'bg-green-500 hover:bg-green-00' : 'bg-yellow-500 hover:border border-yellow-600'
            } px-4 py-1 mb-1 rounded-full text-white `}
            
           
                       >ADD{`${isAdd ? " +" : ""}`}</button></div>
        </div>

      </Link>



    </>)
}

export default Product