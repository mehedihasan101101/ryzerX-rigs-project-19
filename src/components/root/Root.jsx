import { Outlet } from "react-router";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import { createContext, useState } from "react";

export const cartContext = createContext([])

const Root = () => {
    // State to hold the items in the cart
    const [cartItems, setCartItems] = useState([]);

    // State to hold the total price of items in the cart
    const [total, setTotal] = useState(0);

    const [wishList, setWishList] = useState([])




    return (
        <>
            <cartContext.Provider value={{ setCartItems, cartItems, setTotal, wishList, setWishList }}>
                <NavBar cartItems={cartItems} total={total} wishList={wishList}></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </cartContext.Provider>

        </>
    );
};

export default Root;