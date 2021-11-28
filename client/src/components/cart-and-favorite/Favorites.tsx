import React, { ReactElement, useContext } from "react";
import Card from "../card/Card";
import ProductContext from "../../context";

interface Props {}

export default function Product({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.favorites);
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "50px",
        display: "flex",
      }}
    >
      {state.favorites.map((product: Product) => (
        <div style={{ padding: "10px" }}>
          <Card productData={product} />
        </div>
      ))}
    </div>
  );
}
