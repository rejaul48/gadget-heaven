

export async function dataLoadFromApi() {
    // Fetch data from the first API
    const response1 = await fetch('/categories-api.json');
    const categories = await response1.json();

    // Fetch data from the second API
    const response2 = await fetch('/data.json');
    const productData = await response2.json();

    // Return the two datasets in an object
    return { categories, productData };
}
