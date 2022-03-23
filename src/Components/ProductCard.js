import React from "react";

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

  let pricePerQty = (
    (props.product.price.amount * 100) /
    props.product.quantity.amount
  )
    .toFixed(2)
    .toLocaleString("de-DE");

    let discount = (props.product.discount > 0) ? <div> -{props.product.discount}% </div>  : "";
    let isXXl = (props.product.quantity.isXXL) ? <div> XXL </div>  : "";

  return (
    <div>
      <img alt={props.product.name} src={props.product.image}></img>
      {discount}
      {isXXl}
      <div>{badgeOutput}</div>
      <div>{props.product.producer}</div>
      <div>{props.product.name}</div>
      <div>
        {props.product.quantity.amount} {props.product.quantity.unit}
      </div>
      <div>{props.product.description.short}</div>
      <div>{props.product.description.long}</div>
      <div>{props.product.ratings}</div>

      {/* Use to toLocaleString('de-DE') in order to convert decimal price from "." to "," for display */}
      <div>
        {props.product.price.amount.toLocaleString("de-DE")}{" "}
        {props.product.price.currency}
      </div>
      <div>
        ({pricePerQty} {props.product.price.currency} / 100{" "}
        {props.product.quantity.unit})
      </div>
    </div>
  );
};

export default ProductCard;
