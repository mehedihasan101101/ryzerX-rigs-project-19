

const CartBasket = ({ cartItem }) => {
    const { product_image, product_title, price } = cartItem;
    return (
        <div className="flex items-center gap-3">
            <img src={product_image} className="w-[150px] bg-gray-200" alt="" />
            <h6>{product_title}</h6>
            <h6 className="font-bold">${price}</h6>


        </div>
    );
};

export default CartBasket;