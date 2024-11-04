import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import HomeCards from '../../components/HomeCards/HomeCards';


const Home = () => {
    const { categories, productData } = useLoaderData();
    // console.log(categories, productData)

    const [filterCategory, setFilterCategory] = useState('All Category');

    const filteredProducts  = filterCategory === 'All Category' ? productData : productData.filter(product => product.category === filterCategory)

    const handleCategory = (cataName) => {
        setFilterCategory(cataName)
     
    }

    return (
        <>

            <section className='container mx-auto'>

                <section className='bg-primary h-[350px] rounded-b-lg'>
                    <div className='pt-4 text-center text-white'>
                        <h2 className='text-[56px] font-bold w-9/12 mx-auto leading-snug '>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                        <p className='text-sm w-6/12 mx-auto my-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Link className='bg-white py-2 px-8 rounded-full text-primary font-bold mt-2'>Shop Now</Link>


                    </div>
                </section>

                <div className='-mt-16'>
                    <div className='lg:w-6/12 mx-auto border-2 border-gray-200 p-2 bg-transparent backdrop-blur-md rounded-lg mb-12'>
                        <div className="sub_banner ">
                            <img className='w-full' src="https://i.imgur.com/ysRx88u.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="section_head text-center mt-4">
                    <h2 className='text-4xl font-bold'>Explore Cutting-Edge Gadgets</h2>
                </div>


                {/* category section */}

                <section className='flex gap-5 mt-12'>
                    <div className='categories w-2/12'>
                        <ul className='border-2 border-gray-300 px-5 rounded-lg'>
                            {
                                categories.map(category => (
                                    <li onClick={() => { handleCategory(category.category) }} key={category.id} className='bg-green-200 mt-3 mb-3 py-2 p-4 cursor-pointer rounded-full bg-opacity-25' >
                                        <h2
                                        ><span >{category.category}</span></h2>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='cata_wise_data w-10/12'>

                        {
                            filteredProducts .length > 0 ? (<HomeCards products={filteredProducts } ></HomeCards>) : 
                            (<div className='text-gray-500 mt-10 h-[20vh] flex justify-center items-center'>
                              <h2 className='text-5xl'>No Data Found</h2>
                            </div>)
                        }

                    </div>
                </section>

                {/* category wise data section */}

            </section>


        </>
    )
}

export default Home
