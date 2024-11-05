import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    getStoreCartData,
    addToLocalStorageCartData,
    removeFromLocalStorageCartData,
    removeFromLocalStorageWishData
} from '../../utilities/localStorage';
import { showSuccessToast, showWarnToast } from '../../utilities/showToast';

const AddedCard = ({ filterProduct, onRemove }) => {
    const { product_image, product_title, description, price, product_id } = filterProduct;

    // Determine current page (cart or wishlist)
    const location = useLocation();
    const isCart = location.pathname === '/dashboard/cart';
    const isWishlist = location.pathname === '/dashboard/wishlist';

    // Handle moving item from wishlist to cart
    const handleWishlistToCart = (id) => {
        const cartData = getStoreCartData();

        if (!cartData.includes(id)) {
            addToLocalStorageCartData(id); // Add to cart
            removeFromLocalStorageWishData(id); // Remove from wishlist

            // Only update the state in the parent component without showing the toast for removal
            onRemove(id, false); // Pass false to prevent showing the remove toast

            // Show toast for action
            return showSuccessToast(`${product_title} added into Cart`);
        } else {
            return showWarnToast(`${product_title} already exists in cart`);
        }
    };


    // Handle removing item from wishlist
    const handleRemoveFromWishlist = (id) => {
        removeFromLocalStorageWishData(id); // Remove item from wishlist
        if (onRemove) {
            onRemove(id);
          
        } else {
             
        }
    };

    // Handle removing item from cart
    const handleRemoveFromCart = (id) => {
        removeFromLocalStorageCartData(id); // Remove item from cart
        onRemove(id); // Update the state in the parent component
        
        // show toast for remove item from cart
        return showSuccessToast(`${product_title} removed from Cart`)
    };

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
                            {isWishlist && (
                                <button
                                    onClick={() => handleWishlistToCart(product_id)}
                                    className='bg-primary text-white py-2 px-5 rounded-full'>
                                    Add To Cart
                                </button>
                            )}
                             
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='hidden md:block'>
                            <button
                                onClick={() => isCart ? handleRemoveFromCart(product_id) : handleRemoveFromWishlist(product_id)}
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

// PropTypes validation
AddedCard.propTypes = {
    filterProduct: PropTypes.shape({
        product_image: PropTypes.string.isRequired,
        product_title: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number.isRequired,
        product_id: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default AddedCard;
