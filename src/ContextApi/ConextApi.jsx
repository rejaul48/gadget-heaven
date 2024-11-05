import React, { createContext, useState } from 'react';

// Create a Context for the products
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);  
    const [cart, setCart] = useState([]);  
    const [wishlist, setWishlist] = useState([]);  

    // Function to add to cart
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    // Function to remove from cart
    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter(item => item.product_id !== productId));
    };

    // Function to add to wishlist
    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product]);
    };

    // Function to remove from wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter(item => item.product_id !== productId));
    };

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            cart,
            addToCart,
            removeFromCart,
            wishlist,
            addToWishlist,
            removeFromWishlist,
            setCart,
            setWishlist
        }}>
            {children}
        </ProductContext.Provider>
    );
};
