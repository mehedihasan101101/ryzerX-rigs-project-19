
import { Link, useLoaderData, useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import { IoMdStar } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";


const SingleProductPage = () => {

    // Get the productId from the URL parameters
    const { productId } = useParams();

    // Load all products data from the loader
    const allProducts = useLoaderData();

    // Find the single product that matches the productId (case-insensitive)
    const singleProduct = allProducts.find(each => each.product_id.toLowerCase() === productId);
    const { product_image, product_title, price, availability, Specification, description, rating } = singleProduct;
    console.log(singleProduct)

    return (
        <>
            <div className='bg-gray-200 flex flex-col items-center justify-center pt-10 pb-75'>
                <h1 className='font-bold text-2xl text-center'>Product Details</h1>
                <p className='text-center max-w-[750px]'>Find all the essential information about this product, including its features, specifications, and availability. Everything you need to know is right here.</p>
            </div>

            <div className='flex w-[70%] mb-35 mt-[-13%] bg-white gap-10 p-8 items-center m-auto rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] '>
                <div className=' w-[38%]  p-10  bg-gray-200 rounded-2xl'>
                    <img src={product_image} className='' alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-[28px] '>{product_title}</h1>
                    <p className='text-xl font-bold'>Price:$ {price}</p>

                    <p className='bg-[#309C08]/10 inline  py-1 px-2 rounded-full border border-[#309C08]'>{availability ? "In Stock" : "Out of Stock"}</p>
                    <p className='mt-3'>{description}</p>
                    <h3 className='mt-3 text-xl font-bold'>Specification</h3>

                    <ul className='list-decimal ml-7'>
                        {Specification.map(eachSpecification => <li>{eachSpecification}</li>)}
                    </ul>

                    <h3 className='mt-3 text-xl font-bold flex items-center'>Rating <IoMdStar className='text-3xl text-yellow-400' ></IoMdStar></h3>
                    <div className='flex items-center gap-2  text-xl'>
                        <StarRatings className=""
                            rating={rating}
                            starRatedColor="gold"
                            changeRating={(newRating) => console.log(newRating)}
                            numberOfStars={5}
                            starSpacing="3px"
                            starDimension="25px"
                            name='rating'
                        />
                        <p className='bg-gray-200/70 rounded-3xl  py-1 text-[13px] px-3 '>{rating}</p>

                    </div>
                    <div>
                        <Link className='btn rounded-4xl'>Add to Cart <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart></Link>
                    </div>


                </div>
            </div>

        </>
    );
};

export default SingleProductPage;