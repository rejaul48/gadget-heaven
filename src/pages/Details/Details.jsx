import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Details = () => {

    const { productId } = useParams();

    const { productData } = useLoaderData();


    const product = productData.find(item => item.product_id === productId);

    if (!product) {
        return (
            <div className='h-[30vh] flex justify-center items-center'>
                <h2 className='text-2xl font-semibold'>Loading...</h2>
            </div>
        )
    }

    const { product_image, product_title, price, availability, description, Specification, rating } = product

    return (
        <>

            <main className='container mx-auto mt-4'>
                <div className="section_hero text-center bg-primary text-white rounded-lg h-[250px] py-4">
                    <h2 className='text-3xl font-semibold'>Product Details</h2>
                    <p className='w-7/12 mx-auto mt-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div className="details_book_info flex gap-5 w-8/12 mx-auto -mt-32
                bg-white p-4 rounded-lg
                ">
                    <div className="left w-5/12 h-auto">
                        <img className='h-full' src={product_image} alt="" />
                    </div>

                    <div className="right w-7/12">
                        <h2 className='text-2xl font-semibold'>{product_title}</h2>
                        <p className='font-semibold my-1'>Price: $ <span>{price}</span></p>
                        <div className='border-2 bg-lime-200 bg-opacity-20 border-lime-600 text-lime-500 py-1 my-2 px-3 w-3/12 text-center rounded-full font-bold'>In stock</div>
                        <p className='text-sm text-gray-500 mt-1 mb-2'>Description: {description}</p>
                        <h3 className='mb-2'><strong>specification:</strong></h3>
                        <ul>
                            {
                                Specification.map((specific, ind) => (
                                    <li key={ind}>{specific}</li>
                                ))
                            }

                            {/* <li>16GB RAM</li>
                            <li>512GB SSD</li>
                            <li>Touchscreen</li> */}
                        </ul>
                        <h3 className='mt-2'><strong>Ratings:</strong></h3>
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                            </div>
                            <div><p className='text-xl font-semibold'>{rating}</p></div>
                        </div>
                        <div className="action_button flex items-center gap-5 mt-3">
                            <button className='flex items-center gap-1
                            bg-primary text-white py-2 px-4 rounded-full
                            '>Add To Card <span><img className='w-[20px]' src="https://img.icons8.com/?size=50&id=9720&format=png" alt="" /></span></button>
                            <button><img className='w-[45px]' src="https://img.icons8.com/?size=50&id=L2sPz0nl-coE&format=png" alt="" /></button>
                        </div>
                    </div>

                    {/* <div className="right w-7/12">
                        <h2 className='text-2xl font-semibold'>Samsun Galaxy S23 Ultra</h2>
                        <p className='font-semibold my-1'>Price: $ <span>999.99</span></p>
                        <div className='border-2 bg-lime-200 bg-opacity-20 border-lime-600 text-lime-500 py-1 my-2 px-3 w-3/12 text-center rounded-full font-bold'>In stock</div>
                        <p className='text-sm text-gray-500 mt-1 mb-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h3 className='mb-2'><strong>specification:</strong></h3>
                        <ul>
                            <li>Intel i7 11th Gen</li>
                            <li>16GB RAM</li>
                            <li>512GB SSD</li>
                            <li>Touchscreen</li>
                        </ul>
                        <h3 className='mt-2'><strong>Ratings:</strong></h3>
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                                <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=bSBJ7165l9Vr&format=gif" alt="" />
                            </div>
                            <div><p className='text-xl font-semibold'>5.0</p></div>
                        </div>
                        <div className="action_button flex items-center gap-5 mt-3">
                            <button className='flex items-center gap-1
                            bg-primary text-white py-2 px-4 rounded-full
                            '>Add To Card <span><img className='w-[20px]' src="https://img.icons8.com/?size=50&id=9720&format=png" alt="" /></span></button>
                            <button><img className='w-[45px]' src="https://img.icons8.com/?size=50&id=L2sPz0nl-coE&format=png" alt="" /></button>
                        </div>
                    </div> */}

                </div>

            </main>



        </>
    )
}

export default Details
