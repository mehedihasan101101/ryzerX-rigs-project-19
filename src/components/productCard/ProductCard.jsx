
const ProductCard = ({ eachProduct }) => {
    const { product_title, price, product_image } = eachProduct;
    console.log(eachProduct)
    return (
        <div className="bg-white flex flex-col items-center space-y-4 p-5 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className=" bg-gray-200 rounded-2xl">
                <img className="h-[300px] rounded-2xl" src={product_image} alt="" />
            </div>
            
            <h1 className="text-xl pl-2 self-start font-bold">{product_title}</h1>
            <h3 className=" pl-2 self-start">{price} $</h3>
            <button className="btn rounded-4xl self-start">Shop Now</button>

        </div>
    );
};

export default ProductCard;