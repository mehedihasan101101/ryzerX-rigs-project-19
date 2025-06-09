import { NavLink } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";




const NavBar = () => {
    const [open, setOpen] = useState(false);

    function handleHamburgIcon() {
        setOpen(!open)
    }

    const navFields = [
        { id: 1, path: "", name: "Home" },
        { id: 2, path: "/Statistics", name: "Statistics" },
        { id: 3, path: "/Dashboard", name: "Dashboard" },
    ]
    return (
        <nav className=" pt-5 pb-5 bg-transparent">

            <div className="lg:max-w-[90%] m-auto flex justify-between items-center">
                <div className="lg:hidden">

                    {
                        open ? <RxCross1 onClick={handleHamburgIcon} className="text-3xl"></RxCross1> : <IoIosMenu onClick={handleHamburgIcon} className="text-3xl"></IoIosMenu>
                    }

                </div>
                <h1 className="font-extrabold text-xl ">RyzerX</h1>
                <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto w-[30%] top-18 h-screen bg-amber-200 lg:bg-transparent   absolute `}>
                    <ul className="lg:flex gap-7 lg:bg-transparent ">
                        {navFields.map((field) => <NavLink key={field.id} to={field.path} className={" rounded hover:bg-neutral-200 px-3 py-2"}><li>{field.name}</li></NavLink>)}
                    </ul>
                </div>
                <div className="flex  gap-3">
                    <button className="btn indicator btn-circle" >
                        <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                        <span className="badge badge-sm indicator-item">8</span>
                    </button>
                    <button className="  btn btn-circle">
                        <CiHeart className="text-2xl font-extrabold "></CiHeart>
                    </button>
                </div>

            </div>
        </nav >
    );
};

export default NavBar;