import { useContext } from "react";
import { cartContext } from "../root/Root";
import WishListCard from "./WishListCard";


const WishlistSection = () => {
    const { wishList, deletefromCart,cartItems,setCartItems ,setTotal} = useContext(cartContext);
    return (
        <>
            <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-6">
                <div>
                    <h3 className="font-bold text-xl">Wishlist</h3>
                </div>
                <div>
                    {wishList.map(eachItem => <WishListCard setTotal={setTotal} cartItems={cartItems} setCartItems={setCartItems} eachItem={eachItem} deletefromCart={deletefromCart} key={eachItem.product_id}></WishListCard>)}
                </div>
            </div>


        </>
    );
};

export default WishlistSection;