import React, { useState } from "react";

import ProductContext from "./context";

const Container: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "brocoli",
      description: "fresh brocoli",
      status: "available",
    },
    {
      id: 2,
      title: "eggs",
      description: "fresh eggs",
      status: "available",
    },
    {
      id: 3,
      title: "radish",
      description: "fresh radish",
      status: "available",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children};
    </ProductContext.Provider>
  );
};
export default Container;
