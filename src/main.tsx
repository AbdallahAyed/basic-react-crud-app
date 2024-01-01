import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Products from "./Products.tsx";
import Categories from "./Categories.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Home from "./Home.tsx";
import ProductDetails from "./ProductDetails.tsx";
import AddProduct from "./AddProduct.tsx";
import { ProductsProvider } from "./context/ProductsContext.tsx";
import EditProduct from "./EditProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products/add-new-product",
        element: <AddProduct />,
      },
      {
        path: "/products/edit-product/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
);
