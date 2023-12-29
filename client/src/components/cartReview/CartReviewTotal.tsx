import { useContext } from "react";
import ProductContext from "../../context";

export const CartReviewTotal = () => {
  const { state, dispatch } = useContext(ProductContext);
  const cartItems: CartAndFavoriteItem[] = state.cart;
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>Total (USD)</span>
      <strong>€{total}</strong>
    </li>
  );
};
