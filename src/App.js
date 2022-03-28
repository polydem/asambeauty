import React from "react";
import ProductList from "./Views/ProductList";
import ProductPage from "./Views/ProductPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./Styles/App.scss"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
      
  );
};

export default App;
