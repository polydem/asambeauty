import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import Cart from "./Cart";
import Delivery from "./Delivery";
import ProductInfoListIcon from "./SvgIcons/ProductInfoListIcon";
import '../Styles/ProductDetails.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productAdvantages = product.pageDescription.advantages;

  let pricePerQty = ((product.price.amount * 100) / product.quantity.amount)
    .toFixed(2)
    .toLocaleString("de-DE");

  let calculteRatings = ((product.ratings * 100) / 5).toString();
  let starRatings = calculteRatings + "%";

  return (
    <div className="product-info">
      <div>
        <h1>
          <div className="product-brand">{product.producer}</div>
          {product.name}
        </h1>
        <div className="product-ratings">
          <div className="product-ratings-stars">
            <span style={{ width: starRatings }}></span>
          </div>
          <div className="product-ratings-rated">
            {product.customersRated} Kundenmeinungen
          </div>
        </div>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="product-description">
        <h2>{product.pageDescription.title}</h2>
        <ul>
          {productAdvantages.map((advantages) => (
            <li key={advantages.item}>
              <ProductInfoListIcon />
              <p>{advantages.item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="product-price wrapper">
        <div className="product-price-info">
          <div className="product-price-info-amount">
            {product.price.amount.toLocaleString("de-DE")}&nbsp;
            {product.price.currency}
          </div>
          <div className="product-price-info-details">
            <div className="product-price-info-tax">
              (inkl. MwSt., zzgl. <span>Versand</span>)
            </div>
            <div>Artikel Nr. {product.id}</div>
            <div>
              Inhalt: {product.quantity.amount} {product.quantity.unit} (
              {pricePerQty}€ / 100 {product.quantity.unit})
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <Cart />
      </div>
      <div className="divider divider-horizontal"></div>
      <Delivery />
    </div>
  );
};

export default ProductDetails;
