import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../context";

import { CartReviewBody } from "./CartReviewBody";
import { CartReviewHead } from "./CartReviewHead";
import { CartReviewTotal } from "./CartReviewTotal";

interface Props {}

const CartDetails = (props: Props) => {
  const { state, dispatch } = useContext(ProductContext);
  const cartItems: CartAndFavoriteItem[] = state.cart;

  return (
    <div className="col-md-10 order-md-2 mb-4 m-auto">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">
          You have {cartItems.length} Item in your cart
        </span>
      </h4>
      <ul className="list-group mb-3">
        <CartReviewHead />
        <CartReviewBody />
        <CartReviewTotal />
      </ul>
      <Link to="/cart">
        <button className="btn btn-primary btn-lg btn-block">Edit Cart</button>
      </Link>
    </div>
  );
};

export default CartDetails;
