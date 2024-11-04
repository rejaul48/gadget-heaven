import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCards from '../../components/HomeCards/HomeCards';

const CategoryProducts = () => {
    const { productData } = useLoaderData();

    return (
        <div>
            {productData && productData.length > 0 ? (
                <HomeCards products={productData} />
            ) : (
                <div className='text-gray-500 mt-10 h-[20vh] flex justify-center items-center'>
                    <h2 className='text-5xl'>No Data Found</h2>
                </div>
            )}
        </div>
    );
};

export default CategoryProducts;
