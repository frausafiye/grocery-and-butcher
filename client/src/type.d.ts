interface Product {
  id: number;
  title: string;
  type: ProductType;
  shortDescription: string;
  content: string;
  price: number;
  longDescription: string;
  status: string;
  inCarousel: boolean;
  image: string;
}
interface CartAndFavoriteItem extends Product {
  quantity: number;
}

type ProductType = "vegatables" | "butchery-and-milk-products";

// type contextType = {
//   products: Product[];
//   setProducts: () => Product;
//   saveProduct: (product: Product) => void;
//   updateProduct: (id: number) => void;
// };

interface ActionType {
  type: string;
  // payload?: PayloadType;
  payload: PayLoadType;
}
type PayLoadType = CartAndFavoriteItem;
// interface AddToCartPayload{
//    data:Object,
//    isDone:Boolean
//  }
interface StateType {
  products: Product[];
  favorites: Product[];
  cart: CartAndFavoriteItem[];
}
