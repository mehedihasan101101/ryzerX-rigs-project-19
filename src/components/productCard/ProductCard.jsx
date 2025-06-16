
const ProductCard = ({eachProduct}) => {
    const {product_title} = eachProduct
    return (
        <div>
              <h1>{product_title}</h1>
        </div>
    );
};

export default ProductCard;