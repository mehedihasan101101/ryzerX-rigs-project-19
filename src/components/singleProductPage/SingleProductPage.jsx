import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const SingleProductPage = () => {

    // Get the productId from the URL parameters
    const { productId } = useParams();

    // Load all products data from the loader
    const allProducts = useLoaderData();

    // Find the single product that matches the productId (case-insensitive)
    const singleProduct = allProducts.find(each => each.product_id.toLowerCase() === productId);

    return (
        <>
        
        </>
    );
};

export default SingleProductPage;