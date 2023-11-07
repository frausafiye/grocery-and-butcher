import React, { ReactElement, useState } from "react";
// import groceryBackground from "../../images/grocery-background.jpg";
// import brocoli from "../../images/brocoli.jpg";
// import radish from "../../images/radish.jpg";
import { Carousel } from "react-bootstrap";
import data from "../../productData";
import CarouselItem from "../CarouselItem";

interface Props {}
// const data = [
//   {
//     image: groceryBackground,
//     caption: "Fresh Vegatables and Fruits",
//     description: "Description Here",
//   },
//   {
//     image: brocoli,
//     caption: "Fresh Broccoli",
//     description: "Description Here",
//   },
//   {
//     image: radish,
//     caption: "Fresh Radish",
//     description: "Description Here",
//   },
// ];

export default function Hero({}: Props): ReactElement {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide) => {
        if (slide.inCarousel && slide.image) {
          return (
            <CarouselItem
              name={slide.image}
              shortDescription={slide.shortDescription}
              longDescription={slide.longDescription}
            />
          );
        } else {
          return null;
        }
      })}
    </Carousel>
  );
}
