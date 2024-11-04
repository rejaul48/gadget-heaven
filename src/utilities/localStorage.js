// Cart data into localStorage
const getStoreCartData = () => {
    const storedListStr = localStorage.getItem('cart');
    return storedListStr ? JSON.parse(storedListStr) : []; // Return empty array if nothing found
}

const addToLocalStorageCartData = (id) => {
    const storedList = getStoreCartData();
    if (!storedList.includes(id)) { // Check if id is not already in the cart
        storedList.push(id);
        localStorage.setItem('cart', JSON.stringify(storedList)); // Update localStorage
    }
}

const removeFromLocalStorageCartData = (id) => {
    let storedList = getStoreCartData();
    storedList = storedList.filter(itemId => itemId !== id); // Filter out the id to remove
    localStorage.setItem('cart', JSON.stringify(storedList)); // Update localStorage
}

// Wishlist Data into localStorage
const getWishStoredData = () => {
    const storedListStr = localStorage.getItem('wishlist');
    return storedListStr ? JSON.parse(storedListStr) : []; // Return empty array if nothing found
}

const addWishDataIntoLocalStorage = (id) => {
    const storedList = getWishStoredData();
    if (!storedList.includes(id)) { // Check if id is not already in the wishlist
        storedList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedList)); // Update localStorage
    }
}

const removeFromLocalStorageWishData = (id) => {
    let storedList = getWishStoredData();
    storedList = storedList.filter(itemId => itemId !== id); // Filter out the id to remove
    localStorage.setItem('wishlist', JSON.stringify(storedList)); // Update localStorage
}

// Export all functions
export { 
    getStoreCartData, 
    addToLocalStorageCartData, 
    removeFromLocalStorageCartData, 
    getWishStoredData, 
    addWishDataIntoLocalStorage, 
    removeFromLocalStorageWishData 
}
