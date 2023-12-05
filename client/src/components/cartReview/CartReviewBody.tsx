import { useContext } from "react";

import ProductContext from "../../context";
import { CartReviewRow } from "./CartReviewRow";

export const CartReviewBody = () => {
  const { state, dispatch } = useContext(ProductContext);
  const cartItems: CartAndFavoriteItem[] = state.cart;

  return (
    <>
      {cartItems.map((item) => {
        return <CartReviewRow item={item} />;
      })}
    </>
  );
};
