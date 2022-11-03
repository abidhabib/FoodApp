import React from 'react'
import Products from '../components/Products'
const Home = () => {
  const homestyle={
    marginTop:'150px',
    width:'100%',
botom : '0',  }
  return (
    <>
          <div style={homestyle}>
      <div className='hero py-16 mb-8'>
        <div className='container mx-auto flex items-center text-center justify-between ' >
          <div className='w-1/2 mr-10'>
            <h6 className='text-lg'>Are You Hungry ?</h6>
            <h1 className='text-3xl  md:text-6xl font-bold'>Don't Wait -</h1>
            <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order Now !</button>
          </div>
          <div style={{
            width:'30%'
        
          }} className=' container mx-auto '>

            <img style={{

              display: 'flex',
              justifyContent: 'flex-end'

            }} src="/images/burger.png" alt="" />

          </div>
        </div>

        </div>





      </div>
<Products/>

    </>)
}

export default Home