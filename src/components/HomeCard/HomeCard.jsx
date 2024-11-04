import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ product }) => {

    const { product_title, product_image, price } = product

    return (
        <>

            <section className='mt-2 h-full'>
                <div className='w-4/6 h-[170px] mx-auto  '>
                    <img className='w-full h-full' src={product_image} alt="img" />
                </div>
                <h2 className='text-xl lg:text-[17px] xl:text-2xl font-semibold mt-2'>{product_title}</h2>
                <p className='text-gray-500 my-1 pb-3'>price: <span>{price}K</span></p>
                <div className='pb-3'>
                    <Link to={`/details/${product.product_id}`} className='border-2 border-primary py-2 px-4 rounded-full'>View Details</Link>
                </div>
            </section>

        </>
    )
}

export default HomeCard
