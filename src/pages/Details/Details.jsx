import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { showSuccessToast, showWarnToast } from '../../utilities/showToast';
import { ProductContext } from './../../ContextApi/ConextApi';
import { Helmet } from 'react-helmet-async';

const Details = () => {

    <Helmet >
        <title>Details | Gadget E-commerce website</title>
    </Helmet>

    const { productId } = useParams();
    const { productData } = useLoaderData();
    const { addToCart, addToWishlist, wishlist, cart } = useContext(ProductContext);

    const product = productData.find(item => item.product_id === productId);

    if (!product) {
        return (
            <div className='h-[30vh] flex justify-center items-center'>
                <h2 className='text-2xl font-semibold'>Loading...</h2>
            </div>
        );
    }

    const handleCartBtn = () => {
        // Check if product is already in cart
        if (cart.some(item => item.product_id === product.product_id)) {
            return showWarnToast('Item already exists in cart');
        }
        addToCart(product); // Add product to cart
        showSuccessToast('Item added to cart');
    };

    const handleWishBtn = () => {
        // Check if product is already in wishlist
        if (wishlist.some(item => item.product_id === product.product_id)) {
            return showWarnToast('Item already exists in wishlist');
        }
        addToWishlist(product); // Add product to wishlist
        showSuccessToast('Item added to wishlist');
    };

    const { product_image, product_title, price, description, Specification, rating } = product;

    return (
        <main className='container mx-auto mt-4'>
            <div className="section_hero text-center bg-primary text-white rounded-lg h-[250px] py-4">
                <h2 className='text-3xl font-semibold'>Product Details</h2>
                <p className='w-7/12 mx-auto mt-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="details_book_info flex gap-5 w-8/12 mx-auto -mt-32 bg-white p-4 rounded-lg">
                <div className="left w-5/12 h-auto flex justify-center items-center">
                    <img className='w-full h-full' src={product_image} alt={product_title} />
                </div>

                <div className="right w-7/12">
                    <h2 className='text-2xl font-semibold'>{product_title}</h2>
                    <p className='font-semibold my-1'>Price: $ <span>{price}</span></p>
                    <p className='text-sm text-gray-500 mt-1 mb-2'>Description: {description}</p>
                    <h3 className='mb-2'><strong>Specification:</strong></h3>
                    <ul>
                        {Specification.map((specific, ind) => (
                            <li key={ind}>{specific}</li>
                        ))}
                    </ul>
                    <h3 className='mt-2'><strong>Ratings:</strong></h3>
                    <p className='text-xl font-semibold'>{rating}</p>
                    <div className="action_button flex items-center gap-5 mt-3">
                        <button onClick={handleCartBtn} className='flex items-center gap-1 bg-primary text-white py-2 px-4 rounded-full'>
                            Add To Cart <span><img className='w-[20px]' src="https://img.icons8.com/?size=50&id=9720&format=png" alt="" /></span>
                        </button>
                        <button onClick={handleWishBtn}>
                            <img className='w-[45px]' src="https://img.icons8.com/?size=50&id=L2sPz0nl-coE&format=png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Details;
