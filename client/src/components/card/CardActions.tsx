import { useEffect, useState, useContext } from "react";

import ProductContext from "../../context";
import { default as CardActionsMUI } from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import QuantityButtons from "./QuantityButtons";
import { useLocation } from "react-router";
interface CardActionsProps {
  productData: Product;
  isExpanded: boolean;
  handleExpandClick: () => void;
  // dispatch: React.Dispatch<{ type: string; payload: CartAndFavoriteItem }>;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardActions({
  productData,
  isExpanded,
  handleExpandClick,
}: CardActionsProps) {
  const { status } = productData;
  const { state, dispatch } = useContext(ProductContext);
  const [showQuantityButtons, setShowQuantityButtons] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  let location = useLocation();

  const favoritesHandler = () => {
    setIsFavorite(!isFavorite);
    dispatch({ type: "updateFavorite", payload: productData });
  };
  useEffect(() => {
    if (state.favorites) {
      const isInFavorites = (state.favorites as Product[]).find(
        (item) => item.id === productData.id
      );
      if (isInFavorites) setIsFavorite(true);
    }
  }, [state.favorites]);
  useEffect(() => {
    if (location.pathname === "/cart") {
      setShowQuantityButtons(true);
    }
  }, []);

  useEffect(() => {
    if (state.cart.length) {
      const itemInCart = (state.cart as CartAndFavoriteItem[]).find(
        ({ id }) => id === productData.id
      );
      if (itemInCart) {
        setQuantity(itemInCart.quantity);
      }
    }
  }, [state.cart]);

  return (
    <CardActionsMUI disableSpacing>
      <IconButton
        aria-label="add to favorites"
        onClick={favoritesHandler}
        style={isFavorite ? { color: "red" } : { color: "rgba(0, 0, 0, 0.54)" }}
      >
        <FavoriteIcon />
      </IconButton>
      {status === "available" && (
        <IconButton
          aria-label="add to cart"
          onClick={() => setShowQuantityButtons(!showQuantityButtons)}
        >
          <FontAwesomeIcon icon={faShoppingBasket} />
        </IconButton>
      )}

      {showQuantityButtons && (
        <QuantityButtons
          productData={productData}
          dispatch={dispatch}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
      <ExpandMore
        expand={isExpanded}
        onClick={handleExpandClick}
        aria-expanded={isExpanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActionsMUI>
  );
}
