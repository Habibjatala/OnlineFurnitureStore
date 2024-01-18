import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  AdminPannel,
  CreateProduct,
  UpdateProduct,
} from "../pages";
import UserLayout from "../layouts/UserLayout";
import AdminPannelLayout from "../layouts/AdminPannelLayout";
import PrivateRouteWrapper from "../common/PrivateRouteWrapper";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import AllTopProducts from "../pages/AllTopProducts/AllTopProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouteWrapper>
            <Home />
          </PrivateRouteWrapper>
        ),
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/homepage/trending-ingredients",
        element: <AllTopProducts />,
      },
      {
        path: `/productDetails/:id`,
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: "/admin-pannel",
    element: <AdminPannelLayout />,
    children: [
      { path: "/admin-pannel/", element: <AdminPannel /> },
      { path: "/admin-pannel/create-product", element: <CreateProduct /> },
      { path: "/admin-pannel/edit-product/:id", element: <UpdateProduct /> },
    ],
  },
]);
export default router;
