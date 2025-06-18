import { useLoaderData } from "react-router";
import ProductCard from "../productCard/ProductCard";

const ProductArchive = () => {
    const allProducts = useLoaderData();

    return (

        <div className="grid grid-cols-3  gap-5 w-full">
            {allProducts.map(eachProduct => <ProductCard eachProduct={eachProduct}></ProductCard>)}
        </div>

    );
};

export default ProductArchive;