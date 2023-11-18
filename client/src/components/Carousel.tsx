import Carousel from "react-bootstrap/Carousel";
import data from "../productData";

function CarouselWithInterval() {
  const dataToDisplay = data.filter((slide) => slide.inCarousel && slide.image);

  return (
    <Carousel data-bs-theme="dark">
      {dataToDisplay.map((slide) => {
        return (
          <Carousel.Item interval={10000}>
            {/* dynamicly img loading=> after upgrading webpack 5 get rid of the ".default" from src below! */}
            <img
              width="100%"
              height="400px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="fruit"
              src={require(`../images/${slide.title}.jpg`).default}
            />
            <Carousel.Caption
              style={{ backgroundColor: "whitesmoke", color: "black" }}
            >
              <h3>{slide.shortDescription.toUpperCase()}</h3>
              <p>{slide.longDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselWithInterval;
