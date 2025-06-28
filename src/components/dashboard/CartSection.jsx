import { Link, } from 'react-router';
import { IoOptionsOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { useContext, useState } from 'react';
import { cartContext } from '../root/Root';
import CartItemCard from './CartItemCard';
import { TbBasketCancel } from "react-icons/tb";

const CartSection = () => {
    const { cartItems, total, deletefromCart, dashboardCart, setDashboardCart } = useContext(cartContext);

    // State to toggle sorting order: true for low to high, false for high to low
    const [isLowtoHigh, setisLowtoHigh] = useState(true);




    // Function to sort cart items by price low to high and high to low
    function sortByPrice() {
        const sorted = [...cartItems].sort((a, b) => isLowtoHigh ? a.price - b.price : b.price - a.price);
        setDashboardCart(sorted);
        setisLowtoHigh(!isLowtoHigh)
    }

    return (
        <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-6">
            <div className=" flex items-center justify-between ">
                <h3 className="font-bold text-xl">Cart</h3>
                <div className='flex items-center gap-3'>
                    <h3 className="font-bold md:block hidden ">Total Price:${total}</h3>

                    <Link onClick={sortByPrice} className='btn rounded-4xl'>Sort By Price <IoOptionsOutline className="text-xl"></IoOptionsOutline></Link>
                    <Link className='btn rounded-4xl'>Purchase <BiPurchaseTag className="text-xl"></BiPurchaseTag></Link>
                </div>

            </div>
            <h3 className="font-bold  text-right mt-3 pr-2 md:hidden">Total Price:${total}</h3>

            <div className=''>

                {cartItems.length ? dashboardCart.map(eachItem => <CartItemCard key={eachItem.product_id} eachItem={eachItem} deletefromCart={deletefromCart}></CartItemCard>) :
                    <div className="flex flex-col items-center py-30">
                        <TbBasketCancel className="text-xl  "></TbBasketCancel>
                        <h1 className="text-[#6b6b6f]">Oops! Nothing in your cart yet.</h1>
                    </div>}

            </div>

        </div>
    );
};

export default CartSection;