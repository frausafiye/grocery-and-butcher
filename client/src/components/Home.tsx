import Hero from "./hero/BenefitsSection";
import Carousel from "./Carousel";
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
