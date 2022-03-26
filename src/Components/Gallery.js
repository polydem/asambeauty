import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";

const Gallery = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages = product.images;

  return (
    <div className="gallery">
      {productImages.map((gallery) => (
          <img key={gallery.id} alt={gallery.alt} src={gallery.path} />
      ))}
    </div>
  );
};

export default Gallery;
