import { useState, useContext } from "react";

import QuantityButtons from "../card/QuantityButtons";
import ProductContext from "../../context";
type CartReviewRowProps = {
  item: CartAndFavoriteItem;
};
export const CartReviewRow = ({ item }: CartReviewRowProps) => {
  const { state, dispatch } = useContext(ProductContext);
  const { title, shortDescription, content, quantity, price } = item;
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center lh-condensed text-center">
      <span className=" col-sm d-flex flex-column text-start">
        <span className="my-0">{title}</span>
        <small className="text-muted">{shortDescription}</small>
      </span>
      <span className="col-sm">{content}</span>
      <span className="col-sm">
        {
          <QuantityButtons
            productData={item}
            dispatch={dispatch}
            quantity={quantity}
            setQuantity={setItemQuantity}
          />
        }
      </span>
      <span className="text-muted text-end col-sm">€{price * quantity}</span>
    </li>
  );
};
