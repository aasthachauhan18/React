import { createBrowserRouter } from "react-router";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
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
    path: "Shop",
    element: (
      <>
        <Navbar />
        <div>Shopping</div>
        <Footer />
      </>
    ),
  },
]);

export default router;
