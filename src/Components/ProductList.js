import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("products.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.name}>
        <ProductCard product={product}/>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
