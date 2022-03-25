import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productAdvantages = product.pageDescription.advantages;
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.producer}</div>
      <div>{product.ratings}</div>
      <div>{product.pageDescription.title}</div>
      <div>
        {productAdvantages.map((advantages) => (
          <div key={advantages.item}>
            <ul>
              <li>{advantages.item}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
      {product.price.amount} {product.price.currency}
      </div>
      <div>(inkl. MwSt., zzgl. <a href="#">Versand</a>)</div>
      <div>Artikel Nr. {product.id}</div>
    </div>
  );
};

export default ProductDetails;
