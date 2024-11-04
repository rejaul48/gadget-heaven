import React from 'react'

const AddedCard = () => {
    return (
        <>

            <section className='mt-6'>
                <div className=' md:flex gap-4 justify-center shadow-sm p-3 rounded-lg bg-base-200 '>

                    <div className='w-8/12 mx-auto md:mx-0 md:w-3/12 lg:w-2/12'>
                        <img className='w-full h-full rounded-lg' src="https://i.imgur.com/ysRx88u.png" alt="" />
                    </div>
                    <div className='flex justify-between md:w-9/12 lg:w-10/12'>
                        <div>
                            <h2 className=' text-lg mt-2 md:mt-0 md:text-2xl font-bold'>Samsung Galaxy S23 Ultra</h2>
                            <p className='text-sm text-gray-600 py-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                            <h3 className='text-lg font-semibold'>Price: $<span>99.99</span></h3>
                            {/* this button display with conditionally */}
                            <div className='mt-2 flex items-center md:flex-none gap-5 md:gap-0'>
                                <button className='bg-primary text-white py-2 px-5 rounded-full'>Add To Card</button>
                                <button className='md:hidden'><img src="https://img.icons8.com/?size=50&id=3062&format=png" alt="" /></button>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <div className='hidden md:block'>
                                <button><img src="https://img.icons8.com/?size=50&id=3062&format=png" alt="" /></button>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}

export default AddedCard
