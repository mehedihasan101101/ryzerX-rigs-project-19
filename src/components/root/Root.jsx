import { Outlet } from "react-router";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";


const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;