import { createBrowserRouter } from "react-router";
import Navbar from "../component/Navbar";
import LoginCompo from "../pages/LoginCompo";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Login from "../component/Login";
import Dashboard from "../component/Dashboard";
import Card from "../pages/Card";
import ProductCompo from "../component/ProductCompo";
import Product from "../pages/Product";

const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: (
//       <>
//         <Login />
//       </>
//     ),
//   },
//   {
//     path: "/dashboard",
//     element: 
//       <>
//         <ProtectedRoute />
//         <Dashboard />
//         <ProtectedRoute />
//       </>,
//        children: [
//           { path: "product", Component: ProductCompo}
//         ],
    
//   },
     {
      path: "/",
      element: (
        <>

          <Product/>
        </>
      ),
    },
]);

export default router;
