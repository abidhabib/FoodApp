import React from 'react'
import { useState, useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
const SingleProduct = () => {
    const parms = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {

        fetch(`https://star-spark-pasta.glitch.me/api/products/${parms._id}`).then(podres => podres.json()).then(podres => {
            setProduct(podres)
            { }

        })
    }, [])
    const goback=useNavigate()

    const prodStyle = {
        border: '1px solid #9aa0a6',
        borderRadius: '5px',
        width: '270px',
        marginTtop: '20px'
    }

    return (
        <>

            <div className='container mx-auto mt-12'>
                <button className='font-bold mb-12 bg-yellow-400 p-2 rounded-full' onClick={()=>{goback(-1)}}>Back ⬅</button>
            </div>
            <div className='container mx-auto pb-24 flex'>
                <div style={prodStyle}>
                    <div className='flex justify-around mt-0 '>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='text-center'>

                        <h6 className='text-lg font-bold py-2 text-center'>{product.name}</h6>
                        <span className='bg-gray-200 px-4  rounded-full text-sm'  >{product.size}</span>
                    </div>
                    <div className='flex justify-around items-center mt-4'>
                        <span>Rs:{product.price}</span>
                        <button className=' px-4 py-1 mb-1 rounded-full text-white    bg-yellow-500 hover:bg-yellow-600'> Add</button></div>
                        
                </div>
                <div>
                    <div className='w-1/2 text-start container mx-auto mt-2  flex justify-end'>
<div className='whitespace-pre-wrap  text-xl'>
If you’re already struggling to make it to work, school – 
or a very important occasion – then one of the last things 
on your mind is food.At this point, you’re probably feeling frantic –
and in a panic – about whether or not you’re going to arrive on time.
But that’s what makes fast food so great –  it comes to the rescue
in the midst of dire circumstances. Not only that,
but you’ll feel a lot less overwhelmed; After all,
you won’t be forced to whip up something –and make yourself more late.
One of the most significant complaints about the fast food industry is that the menu items
 they serve are high in calories. Although there is some truth to this issue, most 
 restaurants offer a clear calorie count on their foods so that you can make a smart decision
  about what you choose to eat. The entire catalog of nutritional information 
  is available to you upon request as well. Most providers also publish this 
  data online for you to review at any time.
</div>

</div>

                </div>
            </div>
            <h6></h6>
        </>

    )
}

export default SingleProduct