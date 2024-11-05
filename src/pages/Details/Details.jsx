import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToLocalStorageCartData, addWishDataIntoLocalStorage, getStoreCartData, getWishStoredData } from '../../utilities/localStorage';
import useTitleHook from '../../components/useTitleHook/useTitleHook';
import { showSuccessToast, showWarnToast } from '../../utilities/showToast';

const Details = () => {

    // Dynamic Title
    useTitleHook('Details')

    const { productId } = useParams();
    const { productData } = useLoaderData();

    // add to localStorage
    const handleCartBtn = (id) => {
        const getCartInfo = getStoreCartData()
        if(getCartInfo.includes(id)){
            return showWarnToast('item already exist in cart')
        }
        addToLocalStorageCartData(id)
        showSuccessToast('item added into cart')
    }
    const handleWishBtn = (id) => {

        const getIdFromLocal = getWishStoredData();

        if (getIdFromLocal.includes(id)) {
           return showWarnToast('item already exist in wishlist')
            
        }
        addWishDataIntoLocalStorage(id)
        showSuccessToast('Item added into wishlist')

    }

    const product = productData.find(item => item.product_id === productId);

    if (!product) {
        return (
            <div className='h-[30vh] flex justify-center items-center'>
                <h2 className='text-2xl font-semibold'>Loading...</h2>
            </div>
        )
    }

    const { product_image, product_title, price, availability, description, Specification, rating, product_id } = product

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
                    <div className="left w-5/12 h-auto flex justify-center items-center">
                        <img className='w-full h-full' src={product_image} alt="" />
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


                        </ul>
                        <h3 className='mt-2'><strong>Ratings:</strong></h3>
                        <div className='flex items-center gap-3'>


                            {
                                rating >= 5 ? (
                                    <div className='flex'>
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                                        <img className='w-[25px]' src="https://img.icons8.com/?size=48&id=19295&format=png" alt="" />

                                    </div>
                                )
                            }



                            <div><p className='text-xl font-semibold'>{rating}</p></div>
                        </div>
                        <div className="action_button flex items-center gap-5 mt-3">
                            <button onClick={() => { handleCartBtn(product_id) }} className='flex items-center gap-1
                            bg-primary text-white py-2 px-4 rounded-full
                            '>Add To Card <span><img className='w-[20px]' src="https://img.icons8.com/?size=50&id=9720&format=png" alt="" /></span></button>
                            <button onClick={() => { handleWishBtn(product_id) }}><img className='w-[45px]' src="https://img.icons8.com/?size=50&id=L2sPz0nl-coE&format=png" alt="" /></button>
                        </div>
                    </div>


                </div>

            </main>



        </>
    )
}

export default Details
