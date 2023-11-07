import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/cart-and-favorite/Cart";
import Favorites from "./components/cart-and-favorite/Favorites";
import { Home } from "./components/Home";
import CheckoutForm from "./components/checkout/CheckoutForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products/*" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutForm />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
