import CartAmount from "./CartAmount";
import gift from "../Assets/newsletterGift.png";
import WhishListIcon from "./SvgIcons/WhishListIcon";

const Cart = () => {
  return (
    <div className="product-addToCart">
      <div className="product-addToCart-buttons">
        <CartAmount />
        <button className="product-addToCart-button">In der Warenkorb</button>
      </div>
      <div className="product-wishlist">
        <span>
         <WhishListIcon />
          Auf den Wunschzettel
        </span>
      </div>
      <div>
        <img src={gift} alt="Newsletter Gift" />
      </div>
    </div>
  );
};

export default Cart;
