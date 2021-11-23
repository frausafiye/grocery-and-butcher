import React, { ReactElement, useContext } from "react";
import ProductContext from "./context";

interface Props {}

export default function Product({}: Props): ReactElement {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <div>
      {products.map((item: Product) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
}
