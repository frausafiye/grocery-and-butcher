import React, { ReactElement, useContext } from "react";
import Card from "../card/Card";
import ProductContext from "../../context";

interface Props {}

export default function Favorites({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",
        display: "flex",
        flexWrap: "wrap",
        minHeight: "80vh",
      }}
    >
      {state.favorites.map((product: Product) => (
        <div key={product.id} style={{ padding: "10px" }}>
          <Card productData={product} />
        </div>
      ))}
    </div>
  );
}
