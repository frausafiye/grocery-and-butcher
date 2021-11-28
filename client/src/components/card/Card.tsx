import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import brocoli from "../../images/brocoli.jpg";
import radish from "../../images/radish.jpg";
import eggs from "../../images/eggs.jpg";
import QuantityButtons from "./QuantityButtons";
import ProductContext from "../../context";

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

const images = { brocoli: brocoli, radish: radish, eggs: eggs };

interface Props {
  productData: Product;
  // dispatch: React.Dispatch<{ type: string; payload: CartAndFavoriteItem }>;
}

export default function CardComponent({ productData }: Props) {
  const { state, dispatch } = useContext(ProductContext);
  const [showQuantityButtons, setShowQuantityButtons] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [expanded, setExpanded] = useState(false);
  const {
    title,
    shortDescription,
    content,
    type,
    longDescription,
    price,
    status,
  } = productData;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (state.cart.length) {
      console.log("there is a change in cart");
      const itemInCart = (state.cart as CartAndFavoriteItem[]).find(
        ({ id }) => id === productData.id
      );
      if (itemInCart) {
        setQuantity(itemInCart.quantity);
      }
    }
  }, [state.cart]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={`Content: ${content} Price:${price}$`}
      />
      <CardMedia
        component="img"
        height="194"
        image={(images as any)[title]}
        alt={title}
        style={{ width: "250px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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

        {/* {showQuantityButtons && ( */}
        <QuantityButtons
          productData={productData}
          dispatch={dispatch}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        {/* )} */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph> {longDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
