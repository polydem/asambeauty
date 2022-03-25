import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import GalleryFetch from "./GalleryFetch";

const Gallery = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages = product.images;

  return (
    <div>
      {productImages.map((gallery) => (
        <div key={gallery.id}>
          <GalleryFetch gallery={gallery} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
