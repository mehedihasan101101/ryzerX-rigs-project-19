import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Statistics from './components/statistics/Statistics';
import Dashboard from './components/dashboard/Dashboard';
import AboutUs from './components/about/AboutUs';
import Allproduct from './components/categories/Allproduct';


const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        children: [
          {
            path: "category/:categoryname",
            element: <Allproduct></Allproduct>,
            loader:({params})=>(console.log(params.categoryname))
          }
        ]
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
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
