
const calculateTotalPrice = (productData, wishData) => {

    const filterProducts = productData.filter(product =>
        wishData.includes(product.product_id)
    );

    // Calculate total price
    const totalPrice = filterProducts.reduce((accumulator, product) => {
        return accumulator + product.price; 
    }, 0);

    return totalPrice; 
};

export default calculateTotalPrice;
