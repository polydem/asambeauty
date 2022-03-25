import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";

const ProductDetails = () => {
    const { productId } = useParams();
    const product = productsData.find((item) => item.id === productId);
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.producer}</div>
        <div>{product.ratings}</div>
    </div>
  );
};

export default ProductDetails;
