import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  productData: Product;
  quantity: number;
  dispatch: React.Dispatch<{ type: string; payload: CartAndFavoriteItem }>;
  setQuantity: Function;
}

export default function RecipeReviewCard({
  productData,
  quantity,
  dispatch,
  setQuantity,
}: Props) {
  const updateCart = (action: "increase" | "decrease") => {
    setQuantity(quantity + 1);
    const updatedQuantity = action === "increase" ? quantity + 1 : quantity - 1;
    dispatch({
      type: "updateCartItem",
      payload: { ...productData, quantity: updatedQuantity },
    });
  };

  return (
    <IconButton>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={() => {
            updateCart("increase");
          }}
        />
        <input
          type="number"
          disabled
          value={quantity}
          style={{
            width: "50px",
            height: "24px",
            fontSize: "16px",
            textAlign: "center",
          }}
        />
        <FontAwesomeIcon
          icon={faMinusCircle}
          onClick={() => {
            if (quantity > 0) {
              updateCart("decrease");
            }
          }}
        />
      </div>
    </IconButton>
  );
}
