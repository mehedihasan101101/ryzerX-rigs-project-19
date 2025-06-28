import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router";


const CartItemCard = ({ eachItem, deletefromCart }) => {
    const CartBasketid = "cartBasket";

    const { product_image, product_title, description, price, product_id } = eachItem;
    return (
        <div className="flex items-center md:mt-5 mt-2 lg:h-45 md:h-41 px-3 py-3 lg:px-4 md:px-3 md:rounded-xl rounded w-full justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

            <div className="flex items-center gap-5">
                <div className="bg-gray-200 md:rounded-xl rounded p-1 flex flex-col items-center justify-center  lg:w-[250px] lg:h-[155px]  md:w-[220px] md:h-[138px] w-[220px]  h-[120px]">
                    <img className="md:h-full" src={product_image} alt="" />
                </div>

                <div>
                    <h4 className="font-bold">{product_title}</h4>
                    <p>{description}</p>
                    <h4 className="font-bold">Price:${price.toFixed(2)}</h4>
                </div>

            </div>
            <div className="pl-2">
                <Link onClick={() => deletefromCart(product_id, CartBasketid)}><RiDeleteBinFill className="text-[#e3342f] text-2xl"></RiDeleteBinFill></Link>
            </div>

        </div>
    );
};

export default CartItemCard;