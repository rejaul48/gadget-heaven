import React, { useContext } from 'react';
import AddedCard from '../AddedCard/AddedCard';
import { ProductContext } from './../../ContextApi/ConextApi';


const AddToWishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(ProductContext);

    // Handle removing an item from the wishlist
    const handleRemove = (id) => {
        removeFromWishlist(id);

    };

    return (
        <div>
            {wishlist.length === 0 ? (
                <div className='flex justify-center items-center h-[30vh]'>
                    <p className='text-4xl font-bold text-gray-400'>Wishlist is empty.</p>
                </div>
            ) : (
                wishlist.map((filterProduct) => (
                    <AddedCard
                        key={filterProduct.product_id}
                        filterProduct={filterProduct}
                        onRemove={handleRemove}
                        toastMessage='Product removed from wishlist'
                    />
                ))
            )}
        </div>
    );
};

export default AddToWishlist;
