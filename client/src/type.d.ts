interface Product {
  id: number;
  title: string;
  description: string;
  status: string;
}

type contextType = {
  products: Product[];
  setProducts: () => Product;
  saveProduct: (product: Product) => void;
  updateProduct: (id: number) => void;
};
