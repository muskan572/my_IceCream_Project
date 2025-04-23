import { Navigate, Outlet, useRoutes } from "react-router-dom";

import Navbars from "../modules/nav/navbar";

import { PATH_DASH } from "./path";
import { HomePage } from "../modules/home";
import { ConeProduct } from "../modules/products/coneProduct";
import { StickProduct } from "../modules/products/stickProduct";
import { CakeProduct } from "../modules/products/cakeProduct";
import { CupProduct } from "../modules/products/cupProduct";
import { WaffProduct } from "../modules/products/waffProduct";
import ContactUs from "../modules/contactUs/contactUs";
import { AboutUs } from "../modules/aboutUs-page/aboutUs";
import AddToCart from "../modules/product-detail-pages/add-to-cart";
import { ProductDetails } from "../modules/product-detail-pages/productDetails";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={PATH_DASH.home} />,
    },
    {
      element: <Outlet />,
      children: [
        {
          path: PATH_DASH.root,
          element: <Navbars />,
          children: [
            { path: PATH_DASH.home, element: <HomePage /> },
            {
              path: PATH_DASH.contact,
              element: <ContactUs />,
            },
            { path: PATH_DASH.aboutUs, element: <AboutUs /> },
            { path: PATH_DASH.cone, element: <ConeProduct /> },
            { path: PATH_DASH.stick, element: <StickProduct /> },
            { path: PATH_DASH.cup, element: <CupProduct /> },
            { path: PATH_DASH.cake, element: <CakeProduct /> },
            { path: PATH_DASH.waff, element: <WaffProduct /> },
            { path: PATH_DASH.addtocart, element: <AddToCart /> },
            { path: PATH_DASH.productDetails, element: <ProductDetails /> },
          ],
        },
      ],
    },
  ]);
}
