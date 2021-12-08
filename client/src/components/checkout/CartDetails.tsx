import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../context";

interface Props {}

const CartDetails = (props: Props) => {
  const { state, dispatch } = useContext(ProductContext);
  const cartItems: CartAndFavoriteItem[] = state.cart;
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">
          {cartItems.length}
        </span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">ITEM</h6>
          </div>
          <span>QUANTITY</span>
          <span className="text-muted">TOTAL</span>
        </li>

        {cartItems.map((item) => (
          <li className="list-group-item d-flex  lh-condensed">
            <div style={{ width: "33.33%" }}>
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">{item.shortDescription}</small>
            </div>
            <span style={{ width: "33.33%", textAlign: "center" }}>
              {item.quantity}
            </span>
            <span
              className="text-muted"
              style={{ width: "33.33%", textAlign: "right" }}
            >
              ${item.price * item.quantity}
            </span>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${total}</strong>
        </li>
      </ul>
      <Link to="/cart">
        <button className="btn btn-primary btn-lg btn-block">Edit Cart</button>
      </Link>
    </div>
  );
};

export default CartDetails;
