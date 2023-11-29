import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import CardContent from "./CardContent";
import CardActions from "./CardActions";
import brocoli from "../../images/brocoli.jpg";
import radish from "../../images/radish.jpg";
import eggs from "../../images/eggs.jpg";

const images = { brocoli: brocoli, radish: radish, eggs: eggs };

interface Props {
  productData: Product;
  // dispatch: React.Dispatch<{ type: string; payload: CartAndFavoriteItem }>;
}

export default function CardComponent({ productData }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { title, shortDescription, content, longDescription, price } =
    productData;

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
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
      <CardContent isShortDesc={true} desc={shortDescription} />

      <CardActions
        productData={productData}
        isExpanded={isExpanded}
        handleExpandClick={handleExpandClick}
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent isLongDesc={true} desc={longDescription} />
      </Collapse>
    </Card>
  );
}
