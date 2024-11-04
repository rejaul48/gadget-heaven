import React from 'react';
import AddedCard from '../AddedCard/AddedCard';
import { getWishStoredData } from '../../utilities/localStorage'; 
import { useLoaderData, useOutletContext } from 'react-router-dom';

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
    const handleRemove = (id) => {
        console.log(`Item with ID: ${id} removed from the wishlist.`); // need to add toast here
        
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
