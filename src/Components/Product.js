import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import Gallery from "./Gallery";

const Product = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const productImages= product.images;
 
  return (
    <div>

{productImages.map((gallery) => (
        <div key={gallery.id}>
         <Gallery gallery={gallery} />
        </div>
      ))}
      <div>{product.producer}</div>
      <div>{product.name}</div>
      <div>{product.ratings}</div>
      <div>
        {product.price.amount} {product.price.currency}
      </div>
    </div>
  );
};

export default Product;
