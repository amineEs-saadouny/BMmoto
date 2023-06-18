import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.js";
import Brands from "./Pages/brands.js";
import Products from "./Pages/Products.js";
import Moto from "./Pages/Moto.js";
import UploadProduct from "./Pages/UploadProduct.js";
import "./Style/style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/moto",
    element: <Moto />,
  },
  {
    path: "/upload-product",
    element: <UploadProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
