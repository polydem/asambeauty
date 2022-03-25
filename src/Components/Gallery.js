import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";

const Gallery = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages = product.images;

  return (
    <div>
      {productImages.map((gallery) => (
        <div key={gallery.id}>
          <img alt={gallery.alt} src={gallery.path} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
