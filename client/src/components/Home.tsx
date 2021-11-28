import React from "react";
import Hero from "./hero/Hero";
import Product from "./Product";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Product />
    </div>
  );
};
