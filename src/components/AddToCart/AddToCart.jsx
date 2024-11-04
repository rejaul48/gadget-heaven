import React from 'react';
import AddedCard from '../AddedCard/AddedCard';
import { getStoreCartData } from '../../utilities/localStorage';
import { useLoaderData, useOutletContext } from 'react-router-dom';

const AddToCart = () => {
    // This data from API
    const { productData } = useLoaderData();
    // This data from localStorage
    const getCartData = getStoreCartData();
    // Get sorting order from context
    const { sortOrder } = useOutletContext();

    const filterProducts = productData.filter(product =>
        getCartData.includes(product.product_id)
    );

    // Sort products based on the sort order
    const sortedProducts = [...filterProducts].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    // Handle removing an item
    const handleRemove = (id) => {
        console.log(`Item with ID: ${id} removed from the cart.`); // need to add toast here
        
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

export default AddToCart;
