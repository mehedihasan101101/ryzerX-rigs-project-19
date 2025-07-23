

async function handleApiData({ params }) {

    const { categoryname } = params;

    const res = await fetch("/allproduct.json");
    const allproduct = await res.json();

    if (categoryname !== "all" && categoryname) { // If category is 'all', return all products
        const filteredProducts = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return filteredProducts
    }
    else { // If category is 'laptop', filter for laptops

        return allproduct;
    }



}





export { handleApiData }