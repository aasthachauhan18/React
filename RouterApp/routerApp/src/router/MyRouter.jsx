import { createBrowserRouter } from "react-router";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Product from "../pages/Product";
import Learning from "../LearningModule/Learning";
import Foundation from "../LearningModule/Foundation/Foundation";
import RouterComp from "../LearningModule/RouterCompo/RouterComp";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div>Hello World</div>

        <Footer />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Navbar />
        <Service />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/profile/username:",
    element: (
      <>
        <Navbar />
        <Profile/>
      </>
    ),
  },
  
    {
    path: "/product/:id",         
    element: <><Navbar/><Product/></>,
  }, 
{
    path: "/learning",         
    element: <><Navbar/><Learning/><Footer/></>,
    children: [
          { path: "foundation", Component: Foundation },
          { path: "router", Component: RouterComp},
        ],

  },
]);


export default router;
