import React, { useContext } from 'react';
import AddedCard from '../AddedCard/AddedCard';
import { ProductContext } from './../../ContextApi/ConextApi';
import { showSuccessToast } from '../../utilities/showToast';
import {   useLocation, useOutletContext } from 'react-router-dom';

const AddToCart = () => {
    const { cart, removeFromCart } = useContext(ProductContext);

    const location = useLocation();
    const isCarthPath = location.pathname === '/dashboard/cart';

    // Handle removing an item from the cart
    const handleRemove = (id) => {
        removeFromCart(id);
        
    };

    // Access the sorting state using useOutletContext
    const { isSortedAscending } = useOutletContext();

    // Sort cart items based on price, depending on the sorting state
    const sortedCart = [...cart].sort((a, b) => isSortedAscending ? a.price - b.price : b.price - a.price);

    return (
        <div>
            {sortedCart.length === 0 ? (
                <div className='flex justify-center items-center h-[30vh]'>
                    <p className='text-4xl font-bold text-gray-400'>Cart is empty.</p>
                </div>
            ) : (
                sortedCart.map((cartProduct) => (
                    <AddedCard
                        key={cartProduct.product_id}
                        filterProduct={cartProduct}
                        onRemove={handleRemove}
                        toastMessage = 'items removed from Cart'
                    />
                ))
            )}
        </div>
    );
};

export default AddToCart;
