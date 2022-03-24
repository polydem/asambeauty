import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";

const Product = () => {
  const { productId } = useParams();
  const product = productsData.find(item => item.id === productId)
  
  return (
    <div>
  <div>{product.producer}</div>
  <div>{product.name}</div>
  <div>{product.ratings}</div>
  <div>{product.price.amount} {product.price.currency}</div>
  </div>
  );
};

export default Product;
