
import { Link, useLoaderData, useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import { IoMdStar } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { cartContext } from '../root/Root';
import { ToastContainer, toast } from 'react-toastify';
import "./tostifyNotification.css"



const SingleProductPage = () => {


    // Get the productId from the URL parameters
    const { productId } = useParams();

    // Load all products data from the loader
    const allProducts = useLoaderData();

    // Find the single product that matches the productId (case-insensitive)
    const singleProduct = allProducts.find(each => each.product_id.toLowerCase() === productId);

    const { product_image, product_title, price, availability, Specification, description, rating } = singleProduct;

    // Access the setCartItems function from the cart context to update cart state
    const { cartItems, setCartItems, setTotal, wishList, setWishList } = useContext(cartContext)


    // Function to handle adding the product to the cart and calculate the total price
    function handleCart() {
        const updatedCart = [...cartItems, singleProduct];
        setCartItems(updatedCart);

        const totalPrice = updatedCart.reduce((acc, eachCartItem) => acc + eachCartItem.price, 0)

        setTotal(totalPrice)

        toast.success('Added to basket !', {
            position: 'top-left',
            hideProgressBar: true,
            autoClose: 1000,
            className: "text-black"

        });
    }

    function handleWishList() {
        const updatedWishList = [...wishList, singleProduct];
        setWishList(updatedWishList)

        toast.success('Added to wishlist !', {
            position: 'top-left',
            hideProgressBar: true,
            autoClose: 1000,
            className: "text-black"

        });
    }

    return (
        <>
            <div className='bg-gray-200 flex flex-col items-center justify-center pt-10 md:pb-75 pb-40'>
                <h1 className='font-bold text-2xl text-center'>Product Details</h1>
                <p className='text-center max-w-[750px]'>Find all the essential information about this product, including its features, specifications, and availability. Everything you need to know is right here.</p>
            </div>

            <div className='flex md:flex-row   lg:w-[70%] w-[95%] md:mb-35 mb-20 lg:mt-[-13%] md:mt-[-33%] flex-col p-7 mt-[-30%] bg-white gap-10 lg:p-8 md:p-6 items-center m-auto rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] '>
                <div className=' lg:w-[38%] md:w-[50%] p-10  bg-gray-200 rounded-2xl'>
                    <img src={product_image} className='' alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-[28px] '>{product_title}</h1>
                    <p className='text-xl font-bold'>Price:$ {price}</p>

                    <p className={`  py-1 px-2 rounded-full border ${availability ? "bg-[#309C08]/10 border-[#309C08]" : "bg-red-500/10 border-red-500"} inline`}>{availability ? "In Stock" : "Out of Stock"}</p>
                    <p className='mt-3'>{description}</p>
                    <h3 className='mt-3 text-xl font-bold'>Specification</h3>

                    <ul className='list-decimal ml-7'>
                        {Specification.map(  (eachSpecification,index) => <li  key={index} >{eachSpecification}</li>)}
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
                    <div className='flex gap-2'>
                        <Link onClick={handleCart} className='btn rounded-4xl'>Add to Cart <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart></Link>
                        <Link onClick={handleWishList} className='btn btn-circle'><FaRegHeart className="text-xl"></FaRegHeart></Link>
                    </div>


                </div>
            </div >
            <ToastContainer className={"text-red-600"} ></ToastContainer>
        </>
    );
};

export default SingleProductPage;