import React, { ReactElement, useContext } from "react";
import Card from "../card/Card";
import ProductContext from "../../context";
import { NoItemInCartOrFavorites } from "./NoItemInCartOrFavorites";

interface Props {}

export default function Favorites({}: Props): ReactElement {
  const { state } = useContext(ProductContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px",

        minHeight: "calc(100vh - 100px)",
      }}
    >
      {state.favorites.lenght ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {state.favorites.map((product: Product) => (
            <div key={product.id} style={{ padding: "10px" }}>
              <Card productData={product} />
            </div>
          ))}
        </div>
      ) : (
        <NoItemInCartOrFavorites />
      )}
    </div>
  );
}
