import { Link, } from 'react-router';
import { IoOptionsOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";


const CartSection = () => {
    return (
        <div className="lg:max-w-[86%] m-auto mt-6">
            <div className=" flex items-center justify-between ">
                <h3 className="font-bold text-xl">Cart</h3>
                <div className='flex items-center gap-3'>
                    <h3 className="font-bold text-xl">Total Price:99999</h3>

                    <Link className='btn rounded-4xl'>Sort By Price <IoOptionsOutline className="text-xl"></IoOptionsOutline></Link>
                    <Link className='btn rounded-4xl'>Purchase <BiPurchaseTag className="text-xl"></BiPurchaseTag></Link>
                </div>

            </div>

        </div>
    );
};

export default CartSection;