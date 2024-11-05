import React from 'react';
import { Link, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import HomeCards from '../../components/HomeCards/HomeCards';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const { categories, productData } = useLoaderData();
    const location = useLocation();
    const isRootPath = location.pathname === '/';

    return (
        <>
            <Helmet >
                <title>Home | Gadget E-commerce website</title>
            </Helmet>

            <section className='container mx-auto px-4 xl:px-0'>
                <section className='bg-primary h-[280px] md:h-[350px] rounded-b-lg'>
                    <div className='pt-4 text-center text-white'>
                        <h2 className='text-lg md:text-[36px] lg:text-[48px] xl:text-[56px] font-bold md:w-9/12 mx-auto leading-snug'>
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h2>
                        <p className='text-sm md:w-6/12 mx-auto my-3'>
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <Link to='/dashboard' className='bg-white py-2 px-8 rounded-full text-primary font-bold mt-2'>Shop Now</Link>
                    </div>
                </section>

                <div className='-mt-16'>
                    <div className='lg:w-6/12 mx-auto border-2 border-gray-200 p-2 bg-transparent backdrop-blur-md rounded-lg mb-12'>
                        <div className="sub_banner">
                            <img className='w-full' src="https://i.imgur.com/ysRx88u.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="section_head text-center mt-4">
                    <h2 className='text-xl md:text-4xl font-bold'>Explore Cutting-Edge Gadgets</h2>
                </div>

                {/* Category Section */}
                <section className='md:flex gap-5 mt-12'>
                    <div className='categories md:w-3/12 lg:2/12'>
                        <ul className='border-2 border-gray-300 px-5 rounded-lg'>
                            {/* Render All Category button only once */}
                            {categories.map((category, index) => (
                                <li key={index} className='bg-green-200 mt-3 mb-3 py-2 p-4 cursor-pointer rounded-full bg-opacity-25'>
                                    <Link
                                        className=' block py-1'
                                        to={category.category === 'All Category' ? '/' : `/category/${category.category}`}>
                                        {category.category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='cata_wise_data md:w-9/12 lg:10/12'>
                        {isRootPath ? (
                            <HomeCards products={productData} />
                        ) : (
                            <Outlet context={{ productData }} />
                        )}
                    </div>
                </section>
            </section>

        </>
    );
};

export default Home;
