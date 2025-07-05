import { useContext } from "react";
import { cartContext } from "../root/Root";
import WishListCard from "./WishListCard";
import { TbBasketCancel } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const WishlistSection = () => {
    const { wishList, deletefromCart, cartItems, setCartItems, setTotal } = useContext(cartContext);
    return (
        <>
            <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-6 pb-27">
                <div>
                    <h3 className="font-bold text-xl">Wishlist</h3>
                </div>
                <div>
                    {wishList.length ? wishList.map(eachItem => <WishListCard setTotal={setTotal} cartItems={cartItems} setCartItems={setCartItems} eachItem={eachItem} deletefromCart={deletefromCart} key={eachItem.product_id}></WishListCard>)
                        :
                        <div className="flex flex-col items-center mt-15 py-15">
                            <FaRegHeart className="text-xl  "></FaRegHeart>
                            <h1 className="text-[#6b6b6f]">Oops! Nothing in your wishlist yet.</h1>
                        </div>}
                </div>
            </div>

            { }
        </>
    );
};

export default WishlistSection;