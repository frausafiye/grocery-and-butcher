import { ReactElement, useContext } from "react";
import Card from "./card/Card";
import ProductContext from "../context";
import { ProductDashboard } from "./ProductDashboard";

interface Props {}

export default function Product({}: Props): ReactElement {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "50px",
        minHeight: "80vh",
        flexWrap: "wrap",
      }}
    >
      <ProductDashboard />
      <div
        style={{
          display: "flex",
        }}
      >
        {(state.products as Product[]).map((product) => (
          <div key={product.id} style={{ padding: "10px" }}>
            <Card productData={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
