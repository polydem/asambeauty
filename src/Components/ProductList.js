import productsData from "../Data/productsData";
import ProductCard from "./ProductCard";

const ProductList = () => {

  return (
    <div className="product-list">
      {productsData.map((product) => (
        <div key={product.name}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
