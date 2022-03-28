import React from "react";
import Gallery from "../Components/Gallery";
import ProductDetails from "../Components/ProductDetails";


const Product = () => {
  return (
    <div className="container container-details">
      <div className="product">
        <Gallery />
        <ProductDetails />
      </div>
    </div>
  );
};

export default Product;
