import React from "react";


const ProductCard = (props) => {
  return (
    <div>
    <img alt={props.product.name} src={props.product.image}></img>
    <div>{props.product.badge}</div>
    <div>{props.product.producer}</div>
    <div>{props.product.name}</div>
    <div>{props.product.quantity}</div>
    <div>{props.product.description.short}</div>
    <div>{props.product.description.long}</div>
    <div>{props.product.ratings}</div>
    <div>{props.product.price}</div>
  </div>
  );
};

export default ProductCard;
