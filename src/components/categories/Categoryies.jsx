import { useEffect, useState } from "react";
import { Link } from "react-router";


const Categoryies = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])

    return (
        <div>
               <ul>
                    {categories.map(category=><Link to={category.link}><li>{category.name}</li></Link>)}
                </ul>   
        </div>
    );
};

export default Categoryies;