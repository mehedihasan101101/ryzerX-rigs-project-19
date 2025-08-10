import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Statistics from './components/statistics/Statistics';
import Dashboard from './components/dashboard/Dashboard';
import AboutUs from './components/about/AboutUs';
import ProductArchive from './components/productArchive/ProductArchive';
import { handleApiData } from './utilities/handleApiData';
import SingleProductPage from './components/singleProductPage/SingleProductPage';

import WishlistSection from './components/dashboard/WishlistSection';
import CartSection from './components/dashboard/CartSection';
import ErrorPage from './components/errorPage/ErrorPage';






const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path: "home",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <Navigate to="category/all" replace />
          },
          {
            path: "category/:categoryname",
            element: <ProductArchive></ProductArchive>,
            loader: handleApiData
          }
        ]
      },
      {
        path: "home/category/:categoryname/:productId",
        element: <SingleProductPage></SingleProductPage>,
        loader: handleApiData

      },

      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: handleApiData
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Navigate to="cart" replace />
          },
          {
            path: "cart",
            element: <CartSection></CartSection>
          },
          {
            path: "wishlist",
            element: <WishlistSection></WishlistSection>
          }
        ]
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
