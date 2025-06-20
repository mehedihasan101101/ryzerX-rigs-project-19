import { Outlet } from "react-router";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import { createContext, useState } from "react";

export const cartContext = createContext([])

const Root = () => {
    // State to hold the items in the cart
    const [cartItems, setCartItems] = useState([]);

    const [total, setTotal] = useState(0);



    return (
        <>
            <cartContext.Provider value={{ setCartItems, cartItems, setTotal }}>
                <NavBar cartItems={cartItems} total={total}></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </cartContext.Provider>

        </>
    );
};

export default Root;