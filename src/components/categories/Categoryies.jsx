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
                <div className="bg-gray-300  px-9 py-7 rounded-xl ">
                    <ul className="">
                        {categories.map(category => <NavLink className={({ isActive }) => `mt-5 py-2 px-3 rounded-full  text-center  block
                         ${isActive ? "  bg-neutral-300" : "bg-white hover:"}`} to={category.link}>{category.name}</NavLink>)}
                    </ul>
                </div>
            </div>


        </>

    );
};

export default Categoryies;