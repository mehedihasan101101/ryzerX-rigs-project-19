import { useLoaderData } from "react-router";
import ProductCard from "../productCard/ProductCard";

const ProductArchive = () => {
    const allProducts = useLoaderData();


    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2   gap-5 w-full pb-15">
            {allProducts.map(eachProduct => <ProductCard eachProduct={eachProduct}></ProductCard>)}
        </div>

    );
};

export default ProductArchive;