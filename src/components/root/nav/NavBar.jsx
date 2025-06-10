import { NavLink } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";




const NavBar = () => {
    // State to handle mobile menu open/close
    const [open, setOpen] = useState(false);
    // State to handle cart tab open/close
    const [CartTab, setCartTab] = useState(false);
    // State to handle wishlist tab open/close
    const [wishListTab, setwishListTab] = useState(false);


    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "", name: "Home" },
        { id: 2, path: "/Statistics", name: "Statistics" },
        { id: 3, path: "/Dashboard", name: "Dashboard" },
        { id: 4, path: "/AboutUs", name: "About Us" },
    ]
    return (
        // Main navigation bar
        <nav className=" lg:py-7 py-5  bg-transparent pr-2  mt-7">

            <div className="lg:max-w-[90%] m-auto flex justify-between items-center px-6">
                {/* Mobile Menu Toggle Icon */}
                <div className="lg:hidden">

                    {
                        open ? <RxCross1 onClick={() => setOpen(!open)} className="text-3xl"></RxCross1> : <IoIosMenu onClick={() => setOpen(!open)} className="text-3xl"></IoIosMenu>
                    }

                </div>
                {/* Website Main LOGO */}
                <h1 className="font-extrabold text-xl ">RyzerX</h1>
                {/* Navigation Links */}
                <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto w-[45%] top-23 h-screen  bg-neutral-100/90 lg:bg-transparent   absolute `}>
                    <ul className="lg:flex gap-7 lg:bg-transparent text-[#6b6b6f]">
                        {navFields.map((field) => <NavLink key={field.id} to={field.path} className={"rounded hover:bg-neutral-200 px-3 py-2"}><li className="pl-14 lg:pl-0">{field.name}</li></NavLink>)}
                    </ul>
                </div>

                <div className="flex  gap-3">
                    {/* Add to Cart button */}
                    <button onClick={() => { setCartTab(!CartTab); setwishListTab(false) }} className="btn indicator btn-circle" >

                        <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                        <span className="badge badge-sm indicator-item">8</span>
                        {/* cart Tab which shown  only when  cart icon is clicked */}
                        <div className={`shadow absolute top-15 w-[300px] right-0 h-15 ${CartTab ? "" : "hidden"}`}>
                            <h1>Total Price: 300$</h1>
                        </div>
                    </button>

                    {/* Wishlist Button */}
                    <button onClick={() => { setwishListTab(!wishListTab); setCartTab(false) }} className="btn indicator btn-circle" >
                        <CiHeart className="text-2xl"></CiHeart>
                        <span className="badge badge-sm indicator-item">8</span>

                        {/* WishList Tab which shown only when cart icon is clicked */}
                        <div className={`shadow absolute top-15 w-[300px] right-0 h-15 ${wishListTab ? "" : "hidden"}`}>
                            <h1>Total : 300$</h1>
                        </div>
                    </button>

                </div>

            </div>
        </nav >
    );
};

export default NavBar;