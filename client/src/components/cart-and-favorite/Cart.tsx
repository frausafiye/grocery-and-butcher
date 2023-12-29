import { ReactElement, useContext } from "react";
import ProductContext from "../../context";
import { Link } from "react-router-dom";
import CartReviewTable from "../cartReview/CartReviewTable";
import { NoItemInCartOrFavorites } from "./NoItemInCartOrFavorites";

export default function Cart(): ReactElement {
  const { state } = useContext(ProductContext);
  const cartItems: CartAndFavoriteItem[] = state.cart;

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cartItems.length ? (
        <>
          <CartReviewTable />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Link to="/checkout">
              <button className="btn btn-primary btn-lg btn-block">
                checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <NoItemInCartOrFavorites />
      )}
    </div>
  );
}
