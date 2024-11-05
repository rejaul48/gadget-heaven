import React, { useContext } from 'react';
import { ProductContext } from './../../ContextApi/ConextApi';
import { showSuccessToast, showWarnToast } from '../../utilities/showToast';
import { useLocation } from 'react-router-dom';


const AddedCard = ({ filterProduct, onRemove, toastMessage }) => {

    const location = useLocation();
    const isDisabledAddToCartBtn = location.pathname === '/dashboard/cart'

    const { product_image, product_title, description, price, product_id } = filterProduct;
    const { cart, setCart, wishlist, setWishlist } = useContext(ProductContext);

    // Function to handle adding product to cart and removing it from wishlist
    const handleWishlistToCart = () => {
        // Check if the product is already in the cart
        if (!cart.some(item => item.product_id === product_id)) {
            // Add product to cart
            setCart(prev => [...prev, filterProduct]);
            // Remove product from wishlist
            setWishlist(prev => prev.filter(item => item.product_id !== product_id));
            showSuccessToast(`${product_title} added to Cart`);
        } else {
            showWarnToast(`${product_title} already exists in cart`);
        }
    };

    // Function to handle removing product from wishlist
    const handleRemove = () => {
        if (onRemove) {
            onRemove(product_id);

            if (toastMessage) {
                showSuccessToast(`${product_title}  ${toastMessage} `)
            }

        }
    };

    // Check if the product is in the wishlist
    const isInWishlist = wishlist.some(item => item.product_id === product_id);

    return (
        <section className='mt-6'>
            <div className='md:flex gap-4 justify-center shadow-sm p-3 rounded-lg bg-base-200'>
                <div className='w-8/12 mx-auto md:mx-0 md:w-3/12 lg:w-2/12'>
                    <img className='w-full h-full rounded-lg' src={product_image} alt={product_title} />
                </div>
                <div className='flex justify-between md:w-9/12 lg:w-10/12'>
                    <div>
                        <h2 className='text-lg mt-2 md:mt-0 md:text-2xl font-bold'>{product_title}</h2>
                        <p className='text-sm text-gray-600 py-2'>{description}</p>
                        <h3 className='text-lg font-semibold'>Price: $<span>{price}</span></h3>
                        <div className='mt-2 flex items-center md:flex-none gap-5 md:gap-0'>
                            {!isDisabledAddToCartBtn && (
                                <button
                                    onClick={() => { handleWishlistToCart(product_id) }}
                                    className='bg-primary text-white py-2 px-5 rounded-full'>
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='hidden md:block'>
                            <button
                                onClick={handleRemove}
                                className='remove_btn'>
                                <img src="https://img.icons8.com/?size=50&id=3062&format=png" alt="Remove" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddedCard;
