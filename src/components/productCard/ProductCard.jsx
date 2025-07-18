import { Link } from "react-router";

const ProductCard = ({ eachProduct }) => {
    const { product_title, price, product_image, product_id } = eachProduct;

    return (
        <div className="bg-white flex flex-col items-center space-y-4 p-5 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className=" lg:h-[300px] md:h-[230px] h-[180px] flex flex-col justify-center items-center bg-gray-200 rounded-2xl p-1">
                <img className="rounded-2xl" src={product_image} alt="" />
            </div>

            <h1 className="text-xl pl-2 self-start font-bold">{product_title}</h1>
            <h3 className=" pl-2 self-start">{price} $</h3>
            <Link to={product_id.toLowerCase()} className="btn  border   self-start mt-auto font-normal"> Details</Link>



        </div>
    );
};

export default ProductCard;