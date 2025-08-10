import { Link, Navigate, } from 'react-router';
import { IoOptionsOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { useContext, useState } from 'react';
import { cartContext } from '../root/Root';
import CartItemCard from './CartItemCard';
import { TbBasketCancel } from "react-icons/tb";
import successfulIcon from "./../../assets/icons8-check.gif"
const CartSection = () => {
    const { cartItems, total, deletefromCart, dashboardCart, setDashboardCart,setCartItems } = useContext(cartContext);

    // State to toggle sorting order: true for low to high, false for high to low
    const [isLowtoHigh, setisLowtoHigh] = useState(true);




    // Function to sort cart items by price low to high and high to low
    function sortByPrice() {
        const sorted = [...cartItems].sort((a, b) => isLowtoHigh ? a.price - b.price : b.price - a.price);
        setDashboardCart(sorted);
        setisLowtoHigh(!isLowtoHigh)
    }
    function closeModal(){
        setCartItems([]);
    }

    return (
        <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-6 pb-25">
            <div className=" flex items-center justify-between ">
                <h3 className="font-bold text-xl">Cart</h3>
                <div className='flex items-center gap-3'>
                    <h3 className="font-bold md:block hidden ">Total Price:${total.toFixed(2)}</h3>

                    <Link onClick={sortByPrice} className='btn rounded-4xl'>Sort By Price <IoOptionsOutline className="text-xl"></IoOptionsOutline></Link>
                    <button className='btn rounded-4xl' onClick={() => document.getElementById('my_modal_1').showModal()} >Purchase <BiPurchaseTag className="text-xl"></BiPurchaseTag></button>
                </div>

            </div>
            <h3 className="font-bold  text-right mt-3 pr-2 md:hidden">Total Price:${total}</h3>

            <div className=''>

                {cartItems.length ? dashboardCart.map(eachItem => <CartItemCard key={eachItem.product_id} eachItem={eachItem} deletefromCart={deletefromCart}></CartItemCard>) :
                    <div className="flex flex-col items-center mt-15 py-15">
                        <TbBasketCancel className="text-xl  "></TbBasketCancel>
                        <h1 className="text-[#6b6b6f]">Oops! Nothing in your cart yet.</h1>
                    </div>}

            </div>

            {cartItems.length > 0 &&
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box flex flex-col items-center justify-center space-y-3">
                        <img src={successfulIcon} alt="" />
                        <h1 className='text-2xl font-bold'>Payment Successful</h1>
                        <hr className='w-full text-gray-200' />

                        <p className='text-[17px] text-[#6b6b6f]'>Thanks for Purchasing</p>
                        <p className='text-[17px] text-[#6b6b6f]'> Total:{total.toFixed(2)}</p>
                        <div className="modal-action">

                            <form method="dialog">
                                <Link to={"/home/category/all"}><button onClick={closeModal} className="btn">Close</button></Link>
                            </form>
                        </div>
                    </div>
                </dialog>}

        </div>
    );
};

export default CartSection;