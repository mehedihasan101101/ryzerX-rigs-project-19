import { Outlet } from "react-router";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import { createContext, useState } from "react";

export const cartContext = createContext([])

const Root = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <cartContext.Provider value={{ setCartItems, cartItems }}>
                <NavBar cartItems={cartItems}></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </cartContext.Provider>

        </>
    );
};

export default Root;