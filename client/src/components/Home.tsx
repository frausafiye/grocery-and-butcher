import React from "react";
import Hero from "./hero/BenefitsSection";
import Carousel from "./hero/Carousel";
import Product from "./Product";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div>
      <Carousel />
      <Hero />
      <Product />
    </div>
  );
};
