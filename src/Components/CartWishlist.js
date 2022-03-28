import WhishListIcon from "./SvgIcons/WhishListIcon";
import gift from "../Assets/newsletterGift.png";

const CartWishlist = () => {
  return (
    <div className="product-wishlist">
      <span>
        <WhishListIcon />
        Auf den Wunschzettel
      </span>
      <div>
        <img src={gift} alt="Newsletter Gift" />
      </div>
    </div>
  );
};

export default CartWishlist;
