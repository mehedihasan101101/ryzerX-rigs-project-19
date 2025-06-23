import { RiDeleteBinFill } from "react-icons/ri";


const CartItemCard = ({ eachItem }) => {
    const { product_image, product_title, description, price } = eachItem;
    return (
        <div className="flex items-center md:mt-5 mt-2 lg:h-45 md:h-41 px-3 py-3 lg:px-5 md:px-3 rounded-xl w-full justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

            <div className="flex items-center gap-5">
                <div className="bg-gray-200 rounded-xl p-1">
                    <img className="lg:w-[225px] lg:h-[140px] md:w-[180px] md:h-[125px] w-[180px] h-[90px]" src={product_image} alt="" />
                </div>

                <div>
                    <h4 className="font-bold">{product_title}</h4>
                    <p>{description}</p>
                    <h4 className="font-bold">Price:${price}</h4>
                </div>

            </div>
            <div className="pl-2">
                <RiDeleteBinFill className="text-[#e3342f] text-2xl"></RiDeleteBinFill>
            </div>

        </div>
    );
};

export default CartItemCard;