// FetchDataFromApi.js
export async function dataLoadFromApi({ params }) {
    // Fetch categories from the first API
    const response1 = await fetch('/categories-api.json');
    const categories = await response1.json();

    // Fetch products from the second API
    const response2 = await fetch('/data.json');
    const productData = await response2.json();

    // Check if a category parameter is provided
    if (params && params.category) {
        // Filter productData based on the requested category
        const filteredProductData = productData.filter(
            product => product.category === params.category
        );

        return { categories, productData: filteredProductData };
    }

    // If no category is specified, return all data
    return { categories, productData };
}
