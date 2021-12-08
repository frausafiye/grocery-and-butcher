import React, { ReactElement, useContext } from "react";
import Card from "../card/Card";
import ProductContext from "../../context";
import CheckoutForm from "../checkout/CheckoutForm";
import { Link } from "react-router-dom";

interface Props {}

export default function Cart({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.cart);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {state.cart &&
          state.cart.map((cartItem: CartAndFavoriteItem) => (
            <div key={cartItem.id} style={{ padding: "10px" }}>
              <Card productData={cartItem} />
            </div>
          ))}
      </div>
      <Link to="/checkout">
        <button className="btn btn-primary btn-lg btn-block">checkout</button>
      </Link>
    </div>
  );
}
