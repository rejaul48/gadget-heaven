import React from 'react';
import AddedCard from '../AddedCard/AddedCard';
import { getWishStoredData } from '../../utilities/localStorage';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { showSuccessToast } from '../../utilities/showToast';

const AddToWishlist = () => {
    const { productData } = useLoaderData();
    const getWishData = getWishStoredData();
    const { sortOrder } = useOutletContext();

    // Filter products based on wishlist data
    const filterProducts = productData.filter(product =>
        getWishData.includes(product.product_id)
    );

    // Sort products based on the sort order
    const sortedProducts = [...filterProducts].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    // Handle removing an item from the wishlist
    const handleRemove = (id, showToast = true) => {
        const removeProductName = productData.find(product => product.product_id === id);
        if (showToast) {
            showSuccessToast(`${removeProductName.product_title} removed from wishlist`);
        }
    };
    

    return (
        <>
            {sortedProducts.map((filterProduct) => (
                <AddedCard
                    key={filterProduct.product_id}
                    filterProduct={filterProduct}
                    onRemove={handleRemove}
                />
            ))}
        </>
    );
};

export default AddToWishlist;
