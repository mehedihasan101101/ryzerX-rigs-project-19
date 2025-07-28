import { Link, NavLink } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CartBasket from "./CartBasket";
import { TbBasketCancel } from "react-icons/tb";
import WishlistBasket from "./WishlistBasket";






const NavBar = ({ cartItems, total, wishList, deletefromCart }) => {




    // State to handle mobile menu open/close
    const [open, setOpen] = useState(false);
    // State to handle cart tab open/close
    const [CartTab, setCartTab] = useState(false);
    // State to handle wishlist tab open/close
    const [wishListTab, setwishListTab] = useState(false);


    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/Statistics", name: "Statistics" },
        { id: 3, path: "/Dashboard", name: "Dashboard" },
        { id: 4, path: "/AboutUs", name: "About Us" },
    ]

    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        // Main navigation bar
        <nav className={`lg:py-6 py-5   bg-transparent pr-2 mt-2  `}>

            <div className="lg:max-w-[90%] m-auto flex justify-between items-center px-2 md:px-4">
                {/* Mobile Menu Toggle Icon */}
                <div className="lg:hidden z-50">

                    {
                        open ? <RxCross1 onClick={() => setOpen(!open)} className="text-3xl"></RxCross1> : <IoIosMenu onClick={() => setOpen(!open)} className="text-3xl"></IoIosMenu>
                    }

                </div>
                {/* Website Main LOGO */}
                <Link><h1 className="font-extrabold text-xl text-black ">RyzerX</h1></Link>
                {/* Navigation Links */}
                <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto md:w-[30%] w-[45%] top-0 h-screen z-40 bg-neutral-100/90 lg:bg-transparent   absolute `}>
                    <ul className="lg:flex gap-7 lg:mt-0 mt-19 lg:bg-transparent text-[#6b6b6f]">
                        {navFields.map((field) => <NavLink key={field.id} to={field.path} className={({ isActive }) => `rounded px-3 py-2 block ${isActive ? "text-white bg-black" :
                            " hover:bg-neutral-100"}`}>{field.name}</NavLink>)}
                    </ul>
                </div>

                <div className="flex  gap-3">
                    {/* Add to Cart button */}
                    <button onClick={() => { setCartTab(!CartTab); setwishListTab(false) }} className="btn indicator btn-circle" >

                        <AiOutlineShoppingCart className="text-2xl text-black"></AiOutlineShoppingCart>
                        <span className="badge badge-sm indicator-item text-black">{cartItems.length}</span>

                    </button>
                    {/* cart Tab which shown  only when  cart icon is clicked */}
                    <div className={`shadow absolute rounded top-20 flex flex-col items-center gap-3 p-5 lg:right-45 right-25  bg-white/90 ${CartTab ? "" : "hidden"}`}>
                        {/* empty cart message when the nothing is added in the cart*/}
                        {cartItems.length == 0
                            ? <div className="flex flex-col items-center">
                                <TbBasketCancel className="text-xl "></TbBasketCancel>
                                <h1 className="text-[#6b6b6f]">Oops! Nothing in your cart yet.</h1>
                            </div>
                            : cartItems.map(cartItem => <CartBasket key={cartItem.product_id} cartItem={cartItem} deletefromCart={deletefromCart}></CartBasket>)}
                        {/* ---------------------- */}
                        <hr className={` text-gray-200 my-4 w-full ${cartItems.length == 0 ? "hidden" : ""} `} />
                        <div className={` flex items-center justify-between w-full ${cartItems.length == 0 ? "hidden" : ""}`}>

                            <h1 className={`font-bold`}>Total: ${total.toFixed(2)}</h1>
                            <Link to={"dashboard"} className="btn">Checkout</Link>
                        </div>

                    </div>

                    {/* Wishlist Button */}
                    <button onClick={() => { setwishListTab(!wishListTab); setCartTab(false) }} className="btn indicator btn-circle" >
                        <FaRegHeart className="text-2xl text-black"></FaRegHeart>
                        <span className="badge badge-sm indicator-item text-black">{wishList.length}</span>



                    </button>
                    {/* WishList Tab which shown only when cart icon is clicked */}
                    <div className={`shadow absolute rounded top-20 flex flex-col items-center gap-3 p-5 lg:right-35 right-12  bg-white/90 ${wishListTab ? "" : "hidden"}`}>
                        {/* empty wishlist message when the nothing is added in the cart*/}
                        {wishList.length == 0
                            ? <div className="flex flex-col items-center">
                                <FaRegHeart className="text-xl "></FaRegHeart>
                                <h1 className="text-[#6b6b6f]">Oops! Nothing in your wishList yet.</h1>
                            </div>
                            : wishList.map(wishListItem => <WishlistBasket key={wishListItem.product_id} wishListItem={wishListItem} deletefromCart={deletefromCart}></WishlistBasket>)
                        }
                        <Link to={"dashboard/wishlist"} className="btn">Manage</Link>

                    </div>

                </div>

            </div>
        </nav >
    );
};

export default NavBar;