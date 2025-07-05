

async function handleApiData({ params }) {

    const { categoryname } = params;

    const res = await fetch("/allproduct.json");
    const allproduct = await res.json();

    if (categoryname === "all") { // If category is 'all', return all products
        return allproduct;
    }
    else if (categoryname === "laptop") { // If category is 'laptop', filter for laptops
        const laptops = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return laptops
    }
    else if (categoryname === "desktop") { // If category is 'desktop', filter for desktops
        const desktop = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return desktop;
    }
    else if (categoryname === "gpu") { // If category is 'gpu', filter for GPUs
        const gpu = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return gpu;
    }
    else if (categoryname === "ram") { // If category is 'ram', filter for RAMs
        const ram = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return ram;
    }
    else if (categoryname === "motherboard") { // If category is 'motherboard', filter for motherboards
        const motherboard = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return motherboard;
    }
    else if (categoryname === "monitor") { // If category is 'monitor', filter for monitors
        const monitor = allproduct.filter(eachProduct => eachProduct.category.toUpperCase() === categoryname.toUpperCase())
        return monitor;
    }
    else{
        return allproduct;
    }

}





export { handleApiData }