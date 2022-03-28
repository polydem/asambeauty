import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import '../Styles/Gallery.scss';

const Gallery = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages = product.images;
  const images = [];

  productImages.map((gallery) =>
    images.push({ original: gallery.path, thumbnail: gallery.thumbnail })
  );

  let badgeOutput = "";
  switch (product.badge) {
    case "bestSeller":
      badgeOutput = "- BESTSELLER -";
      break;
    case "gratis":
      badgeOutput = "- GRATIS VERSAND -";
      break;
    case "onlineOnly":
      badgeOutput = "- EXLUSIV ONLINE -";
      break;
    default:
      break;
  }

  let discountIcon =
    product.discount > 0 ? (
      <div className="gallery-wrapper-wrap">
        <div className="discount-label">
          <div className="discount-label-text">-{product.discount}%</div>
        </div>
      </div>
    ) : (
      ""
    );

  let xxlIcon = product.quantity.isXXL ? (
    <div className="gallery-wrapper-wrap">
      <div className="discount-label">
        <div className="discount-label-text">XXL</div>
      </div>
    </div>
  ) : (
    ""
  );
  const handleBadges = (curentIndex) => {
    const galleryBadge = document.getElementsByClassName("badge-container").length > 0;
    const galleryDiscount = document.getElementsByClassName("discount-label").length > 0;
    
    if(galleryBadge && galleryDiscount) {
      if (curentIndex !== 0) {
        document.querySelector(".discount-label").classList.add("hide");
        document.querySelector(".badge-container").classList.add("hide");
      } else {
        document.querySelector(".discount-label").classList.remove("hide");
        document.querySelector(".badge-container").classList.remove("hide");
      }
    } else if (galleryBadge) {
      if (curentIndex !== 0) {
        document.querySelector(".badge-container").classList.add("hide");
      } else {
        document.querySelector(".badge-container").classList.remove("hide");
      }
    } else {
      if (curentIndex !== 0) {
        document.querySelector(".discount-label").classList.add("hide");
      } else {
        document.querySelector(".discount-label").classList.remove("hide");
      }
    }
  };
  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        {discountIcon}
        {xxlIcon}
        <ImageGallery
          items={images}
          showNav={false}
          showBullets={true}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleBadges}
        />
        <div className="gallery-wrapper-badge">
          <div className="badge-container">
            <div className="text">{badgeOutput}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
