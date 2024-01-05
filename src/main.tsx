import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Products from "./pages/Products.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import { ProductsProvider } from "./context/ProductsContext.tsx";
import EditProduct from "./pages/EditProduct.tsx";

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
