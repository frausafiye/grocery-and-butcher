import { ReactElement, useContext } from "react";
import ProductContext from "../../context";
import { Link } from "react-router-dom";
import CartReviewTable from "../cartReview/CartReviewTable";

interface Props {}

export default function Cart({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",
        minHeight: "80vh",
      }}
    >
      <CartReviewTable />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      ></div>
      <Link to="/checkout">
        <button className="btn btn-primary btn-lg btn-block">checkout</button>
      </Link>
    </div>
  );
}
