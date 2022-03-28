import productsData from "../Data/productsData";
import ProductCard from "../Components/ProductCard";

const ProductList = () => {

  return (
    <div className="container">
    <div className="product-list">
      {productsData.map((product) => (
        <div key={product.name} className="product-list-card">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
