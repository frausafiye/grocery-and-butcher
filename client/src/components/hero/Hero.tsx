import React, { ReactElement } from "react";
import groceryBackground from "../../images/grocery-background.jpg";
import InfoCard from "./infoCard";

interface Props {}

export default function Hero({}: Props): ReactElement {
  // const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "#EA4335",
        backgroundImage: `url(${groceryBackground})`,
        padding: "20px",
        display: "flex",
      }}
    >
      <InfoCard
        title="Fast Delivery"
        // icon="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v1.png"
        icon="https://img.icons8.com/ios-glyphs/30/000000/double-right--v2.png"
        desc="Your order will be delivered to your address within 1-2 days"
      />
      <InfoCard
        title="Reliable Meat and Dairy Products"
        icon="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v1.png"
        desc="Our food is halal and stored under suitable conditions for your health"
      />
      <InfoCard
        title="Fresh Foods"
        icon="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v1.png"
        desc="Our food is halal and stored under suitable conditions for your health"
      />
      <InfoCard
        title="Competitive Prices"
        icon="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v1.png"
        desc="Our vegetables, eggs, meat and dairy products are served to you directly from the producer, upon order, without waiting on the shelves."
      />
    </div>
  );
}
