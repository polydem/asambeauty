import CartAmount from "./CartAmount";

const Cart = () => {
  return (
    <div className="product-addToCart">
      <div className="product-addToCart-buttons">
        <CartAmount />
        <button className="product-addToCart-button">In der Warenkorb</button>
      </div>
    </div>
  );
};

export default Cart;
