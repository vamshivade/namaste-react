import { createContext } from "react";

const ProductContext = createContext({
  productData: {
    name: "Sandal Wood",
    country: "India",
  },
});

export default ProductContext;
