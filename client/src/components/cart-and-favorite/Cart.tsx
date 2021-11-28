import React, { ReactElement, useContext } from "react";
import Card from "../card/Card";
import ProductContext from "../../context";

interface Props {}

export default function Product({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.cart);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",
        display: "flex",
        minHeight: "80vh",
      }}
    >
      <h1 style={{ color: "white" }}>{state.cart.length}</h1>
      {state.cart &&
        state.cart.map((cartItem: CartAndFavoriteItem) => (
          <div style={{ padding: "10px" }}>
            <Card productData={cartItem} />
          </div>
        ))}
    </div>
  );
}
