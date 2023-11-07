import React, { ReactElement, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

interface Props {
  name: string;
  shortDescription: string;
  longDescription: string;
}

export default function CarouselItem({
  name,
  shortDescription,
  longDescription,
}: Props): ReactElement {
  let [imageUrl, setImageUrl] = useState<string>("");

  const loadImage = (name: string) => {
    console.log("image name:", name);
    import(`../images/${name}`).then((image) => {
      console.log(image);
      setImageUrl(image.default);
    });
  };
  useEffect(() => {
    if (name !== "") {
      loadImage(name);
    }
  }, []);

  return (
    <Carousel.Item interval={3000}>
      <div
        className="d-block w-100"
        style={{
          // backgroundImage: `linear-gradient(to bottom, rgba(50, 100, 50, 0.02), rgba(117, 200, 93, 0.8)) , url(${slide.image})`,
          backgroundImage: `linear-gradient(to bottom, rgba(50, 100, 50, 0.02), rgba(117, 200, 93, 0.8)) , url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat repeat",
          backgroundSize: "cover",
          width: "400px",
          height: "300px",
        }}
      ></div>
      <Carousel.Caption>
        <h3 style={{ color: "white", fontSize: "1,2rem" }}>
          {shortDescription}
        </h3>
        {/* <p>{slide.longDescription}</p> */}
        <p style={{ fontWeight: "bold" }}>
          You can find and order fresh and tasty vegatables and fruits on our
          website
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
