import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Gallery = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages = product.images;
  const arr = [];
  productImages.map((gallery) =>
    arr.push({ original: gallery.path, thumbnail: gallery.thumbnail })
  );
  console.log(arr);
  return (
    <div className="gallery">
      <ImageGallery
        items={arr}
        showNav={false}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default Gallery;
