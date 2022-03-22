import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
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
    <div className="App">
      <h1>Asamebeauty</h1>
      {products.map((product) => (
        <div>
          <img src={product.image}></img>
          <div>{product.badge}</div>
          <div>{product.producer}</div>
          <div>{product.name}</div>
          <div>{product.quantity}</div>
          <div>{product.description.short}</div>
          <div>{product.description.long}</div>
          <div>{product.ratings}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
