import React, { useReducer } from "react";
import ProductContext from "./context";
import productData from "./productData";

const Container: React.FC = ({ children }) => {
  const initialState: StateType = {
    products: productData as Product[],
    cart: [] as CartAndFavoriteItem[],
    favorites: [] as Product[],
  };

  const Reducer = (state: StateType, action: ActionType): StateType => {
    const findItemIndexInCart = (): number => {
      //   let foundedProduct = state.cart.find((product) => product.id === action.payload.id);
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("index: " + index);
      return state.cart.findIndex((item) => item.id === action.payload.id);
    };
    const removeFromCart = (): CartAndFavoriteItem[] => {
      const newCart = [...state.cart].filter(
        (cartitem) => cartitem.id !== action.payload.id
      );
      return newCart;
    };
    const addToCart = (): CartAndFavoriteItem[] => {
      const newCart = [...state.cart, action.payload];
      return newCart;
    };
    const updateCart = (): CartAndFavoriteItem[] => {
      const index = findItemIndexInCart();
      if (index === -1 && action.payload.quantity !== 0) {
        return addToCart();
      } else if (index !== -1 && action.payload.quantity === 0) {
        return removeFromCart();
      } else {
        //update item quantity
        const newCart = [...state.cart];
        newCart.splice(index, 1, action.payload);
        return newCart;
      }
    };
    switch (action.type) {
      case "updateCartItem":
        console.log(action.payload.quantity);
        const updatedState = { ...state, cart: updateCart() };
        return updatedState;
      case "updateFavorite":
        const itemInFavorites = state.favorites.find(
          (item) => item.id === action.payload.id
        );
        const updatedFavorites = itemInFavorites
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [...state.favorites, { ...action.payload }];
        return { ...state, favorites: [...updatedFavorites] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children};
    </ProductContext.Provider>
  );
};
export default Container;
