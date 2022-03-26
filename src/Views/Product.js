import React from "react";
import Gallery from "../Components/Gallery";
import ProductDetails from "../Components/ProductDetails";
import '../Styles/ProductPage.scss';


const Product = () => {
  return (
    <div className="container">
      <div className="product">
        <Gallery />
        <ProductDetails />
      </div>
    </div>
  );
};

export default Product;
