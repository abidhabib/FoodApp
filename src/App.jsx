import React,{useContext,useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Products from './components/Products'
import SingleProduct from './pages/SingleProduct'
import Cart  from './components/Cart'
import Footer from './components/Footer'
import { CartContext } from './pages/CartContext'
const App = () => {
const [cart,setCart] = useState({});
useEffect(()=>{
const cart = window.localStorage.getItem('cart');
              setCart(JSON.parse(cart));
},[])
useEffect(()=>{
window.localStorage.setItem('cart',JSON.stringify(cart))

},[cart]
)

  return (
    <>

      <Router>
        <CartContext.Provider value={{cart,setCart}}>
          <Navigation />

          <Routes>

            <Route  path="/" element={
            
            <Home/>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:_id" element={<SingleProduct />} />

            <Route path="/cart" element={<Cart />} />


          </Routes>

          </CartContext.Provider>

      </Router>


      <Footer />
    </>
  )
}

export default App