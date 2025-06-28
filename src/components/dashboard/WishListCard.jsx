import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';

const WishListCard = ({ eachItem, deletefromCart, cartItems, setCartItems, setTotal }) => {
    const { product_image, product_title, description, price, product_id } = eachItem;

    function handleCart() {
        const updatedCart = [...cartItems, eachItem];
        setCartItems(updatedCart);

        const totalPrice = updatedCart.reduce((acc, eachCartItem) => acc + eachCartItem.price, 0)

        setTotal(totalPrice)

        toast.success('Added to basket !', {
            position: 'top-left',
            hideProgressBar: true,
            autoClose: 1000,
            className: "text-black"

        });
    }

    return (
        <div>
            <div className="flex items-center md:mt-5 mt-2 lg:h-45 md:h-41 px-3 py-3 lg:px-4 md:px-3 md:rounded-xl rounded w-full justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

                <div className="flex items-center gap-5">
                    <div className="bg-gray-200 md:rounded-xl rounded p-1 flex flex-col items-center justify-center  lg:w-[250px] lg:h-[155px]  md:w-[220px] md:h-[138px] w-[220px]  h-[120px]">
                        <img className="md:h-full" src={product_image} alt="" />
                    </div>

                    <div className=" space-y-2">
                        <h4 className="font-bold">{product_title}</h4>
                        <p>{description}</p>
                        <h4 className="font-bold">Price:${price.toFixed(2)}</h4>

                        <Link onClick={handleCart} className='btn hidden md:flex flex-row w-fit'>Add to Cart <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart></Link>
                    </div>

                </div>
                <div className="pl-2 flex flex-col items-center justify-center gap-2">
                    <Link onClick={handleCart} className=' btn md:hidden'> <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart></Link>
                    <button onClick={() => deletefromCart(product_id)} className="cursor-pointer btn"><RiDeleteBinFill className="text-[#e3342f] text-xl md:text-2xl"></RiDeleteBinFill></button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default WishListCard;