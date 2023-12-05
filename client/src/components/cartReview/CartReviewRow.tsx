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
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{title}</h6>
        <small className="text-muted">{shortDescription}</small>
      </div>
      <span>{content}</span>
      <span>
        {quantity}
        {
          <QuantityButtons
            productData={item}
            dispatch={dispatch}
            quantity={quantity}
            setQuantity={setItemQuantity}
          />
        }
      </span>
      <span className="text-muted">${price * quantity}</span>
    </li>
  );
};
