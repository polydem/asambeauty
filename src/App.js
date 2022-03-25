import React from "react";
import ProductList from "./Views/ProductList";
import Product from "./Views/Product";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:productId" element={<Product />} />
        </Routes>
      </Router>
      
  );
};

export default App;
