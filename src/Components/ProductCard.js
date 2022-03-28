import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import WhishListIcon from "./SvgIcons/WhishListIcon";
import '../Styles/ProductCard.scss';

const ProductCard = (props) => {
  let badgeOutput = "";
  switch (props.product.badge) {
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

  var pricePerQty =
    props.product.discount > 0
      ? ((props.product.price.amount -
          (props.product.price.amount * props.product.discount) / 100) *
          100) /
        props.product.quantity.amount
      : (props.product.price.amount * 100) / props.product.quantity.amount;

  let calculteRatings = ((props.product.ratings * 100) / 5).toString();
  let starRatings = calculteRatings + "%";

  let discountIcon =
    props.product.discount > 0 ? (
      <div className="product-list-card-image-special">
        <div className="keepMargin">
          <div className="product-list-card-image-special-inner">
            <div className="product-list-card-image-special-text">
              -{props.product.discount}%
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  let xxlIcon = props.product.quantity.isXXL ? (
    <div className="product-list-card-image-special">
      <div className="keepMargin">
        <div className="product-list-card-image-special-inner">
          <div className="product-list-card-image-special-text">XXL</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  let finalPrice =
    props.product.discount > 0 ? (
      <div className="product-list-card-price">
        <div className="withDiscount">
          {props.product.price.amount.toLocaleString("de-DE")}
          {props.product.price.currency}
        </div>
        <div className="discounted">
          {(
            props.product.price.amount -
            (props.product.price.amount * props.product.discount) / 100
          )
            .toFixed(2)
            .toLocaleString("de-DE")}{" "}
          {props.product.price.currency}
        </div>
      </div>
    ) : (
      <div className="product-list-card-price">
        {props.product.price.amount.toLocaleString("de-DE")}
        {props.product.price.currency}
      </div>
    );

  return (
    <div>
      <Link to={props.product.id} className="product-list-card-link">
        <div className="product-list-card-inner">
          <div className="wishlist-icon">
            <WhishListIcon />
          </div>
          <div>
            <div className="product-list-card-image">
              <img
                alt={props.product.name}
                src={props.product.images[0].thumbnail}
              ></img>
              {discountIcon}
              {xxlIcon}
            </div>

            <div className="product-list-card-badge">
              <div className="product-list-card-badge-inner">
                <div className="product-list-card-badge-text">
                  {badgeOutput}
                </div>
              </div>
            </div>
            <div className="product-list-card-manufacturer">
              {props.product.manufacturer}
            </div>
            <div className="product-list-card-title">{props.product.name}</div>
            <div className="product-list-card-quantity">
              <span className="amount">
                {props.product.quantity.amount}
                {props.product.quantity.unit}
              </span>
              <span className="article">Art-Nr.:{props.product.id}</span>
            </div>
            <div className="product-list-card-description-short">
              {props.product.listDescription.short}
            </div>
            <div className="product-list-card-description-long">
              {props.product.listDescription.long}
            </div>
            <div className="product-ratings">
              <div className="product-ratings-stars">
                <span style={{ width: starRatings }}></span>
              </div>
            </div>
          </div>

          {/* Use to toLocaleString('de-DE') in order to convert decimal price from "." to "," for display */}
          <div>
            {finalPrice}
            <div className="product-list-card-price-per100">
              ({pricePerQty.toFixed(2).toLocaleString("de-DE")}{" "}
              {props.product.price.currency} / 100 {props.product.quantity.unit}
              )
              <div className="product-list-card-price-tax">
                (inkl. MwSt., zzgl. <span>Versand</span>)
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Cart />
    </div>
  );
};

export default ProductCard;
