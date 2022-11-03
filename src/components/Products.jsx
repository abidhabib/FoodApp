import React from 'react'
import Product from '../pages/Product'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../pages/CartContext'
const Products = () => {
  const [products, setProducts] = useState([])
  const { name } = useContext(CartContext);
  useEffect(() => {
    fetch("https://star-spark-pasta.glitch.me/api/products").then(podres => podres.json()).then(podres => {
      setProducts(podres)
    })
  }, [])
  return (<>
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products{name}</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {
          products.map((product) =>
            <Product key={product._id} product={product} />)
        }
      </div>
    </div>

  </>)
}
export default Products
