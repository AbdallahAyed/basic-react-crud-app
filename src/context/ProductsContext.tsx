import { useState, createContext, ReactNode, useContext } from "react";
import { ProductType } from "../Products";
import axios from "axios";
import Swal from "sweetalert2";

interface ProductsContextType {
  newProduct: ProductType;
  setNewProduct: (newProduct: ProductType) => void;
  formSubmit: (e: React.SyntheticEvent) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

// Create a provider component
interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", {
        id: newProduct.id,
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
        category: newProduct.category,
        image: newProduct.image,
        rating: {
          rate: newProduct.rating.rate,
          count: newProduct.rating.count,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Product Added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const contextValue: ProductsContextType = {
    newProduct,
    setNewProduct,
    formSubmit,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to access the products context values
export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
