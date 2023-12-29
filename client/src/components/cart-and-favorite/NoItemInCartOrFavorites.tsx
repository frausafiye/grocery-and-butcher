import { useLocation } from "react-router";

export const NoItemInCartOrFavorites = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/cart" ? "cart" : "favorites";
  return (
    <h3 style={{ color: "white", textAlign: "center" }}>
      You have no item in your {currentPage}.
    </h3>
  );
};
