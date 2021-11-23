import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Metzgerei Project</h1>
      <BrowserRouter>
        <Header />
        <Product />
        {/* <Routes>
          <Route path="product" element={<Product />} /> 
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
