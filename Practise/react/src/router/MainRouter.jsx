import { createBrowserRouter } from "react-router";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },{
    path: "/home",
    element: <Home/>,
  },
]);

export default router