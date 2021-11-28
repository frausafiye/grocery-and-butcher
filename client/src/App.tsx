import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Hero from "./components/hero/Hero";
import Cart from "./components/cart-and-favorite/Cart";
import Favorites from "./components/cart-and-favorite/Favorites";
import { Home } from "./components/Home";
import { ProductDashboard } from "./components/ProductDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products/*" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
