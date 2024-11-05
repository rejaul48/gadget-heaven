import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ product }) => {

    const { product_title, product_image, price } = product

    return (
        <>

            <section className='mt-2 h-full flex flex-col justify-between p-2'>
                <div className='w-auto h-[160px] mx-auto'>
                    <img className='w-full h-full object-fill' src={product_image} alt="img" />
                </div>
                <div>
                    <h2 className='text-xl lg:text-[17px] xl:text-xl font-semibold mt-2'>{product_title}</h2>
                    <p className='text-gray-500 my-1 pb-3'>Price: <span>{price}K</span></p>
                </div>
                <div className='pb-3'>
                    <Link to={`/details/${product.product_id}`} className='border-2 border-primary py-2 px-4 rounded-full'>View Details</Link>
                </div>
            </section>


        </>
    )
}

export default HomeCard
