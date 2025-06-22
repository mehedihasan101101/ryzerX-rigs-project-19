import { NavLink, Outlet } from "react-router";


const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-200 flex flex-col items-center space-y-2 pt-10 pb-8 p-2">
                <h1 className="text-[32px] font-bold">Dashboard</h1>
                <p className="text-[#6b6b6f] text-center max-w-[1000px] ">Welcome to your dashboard. Here you can easily manage your cart and wishlist,
                    track your favorite items, and get ready for a smooth
                    shopping experience.</p>
                <div className="flex  gap-3 mt-5">
                    <NavLink to={"cart"} className="btn rounded-full w-30">Cart</NavLink>
                    <NavLink to={"wishlist"} className="btn rounded-full w-30">Wishlist</NavLink>
                </div>
            </div>

            <Outlet></Outlet>
        </>
    );
};

export default Dashboard;