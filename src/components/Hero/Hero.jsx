import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <>

            <div className='text-center text-white'>
                <h2 className='text-[56px] font-bold w-9/12 mx-auto leading-snug '>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className='text-sm w-6/12 mx-auto my-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link className='bg-white py-2 px-8 rounded-full text-primary font-bold mt-2'>Shop Now</Link>


            </div>

        </>
    )
}

export default Hero
