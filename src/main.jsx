import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Features from './Pages/Features/Features';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Provider/AuthProvider';
import PriveteRoutes from './Provider/Routs/PriveteRoutes';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,

      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/gallery",
        element: <PriveteRoutes><Gallery></Gallery></PriveteRoutes>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service-details/:id",
        element: <PriveteRoutes><ServiceDetails></ServiceDetails></PriveteRoutes>,
        loader: () => fetch('/services.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
