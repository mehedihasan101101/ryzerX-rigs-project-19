import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";


const Categoryies = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])

    return (
        <>
            <div className="">
                <div className="bg-gray-200  md:px-9 px-3 md:py-7 py-5 rounded-xl  ">
                    <ul className="">
                        {categories.map(category => <NavLink className={({ isActive }) => `mt-5 py-2 px-3 rounded-full  text-center  block text-black
                         ${isActive ? "  text-white bg-black " : "bg-white hover:bg-neutral-100"}`} to={category.link}>{category.name}</NavLink>)}
                    </ul>
                </div>
            </div>


        </>

    );
};

export default Categoryies;