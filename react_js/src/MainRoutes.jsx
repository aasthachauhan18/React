import { lazy, Suspense } from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import MainNav from './component/MainNavbar';
import Examples from './pages/Examples.jsx';
import Loader from "./component/Loader.jsx";

// const ConceptsRoute = lazy(() => import("./concepts/ConceptsRoute"));
const ConceptsRoute = lazy(() => import("./concepts/ConceptsRoute")); // ⬅ Correct lazy!

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HomePage /> <a href="/">Home</a> <a href="/about">About</a> <a href="/contact">contact</a>
      <br />
      <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link> <br />Home</>,
  },
  {
    path: "/about",
    element: <> <MainNav /> <a href="/">Home</a> <a href="/about">About</a> <a href="/contact">contact</a>
      <br />
      <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link>
      About</>,
  },
  {
    path: "/contact",
    element: <><MainNav /> <a href="/">Home</a> <a href="/about">About</a> <a href="/contact">contact</a>
      <br />
      <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><br />contact</>,
  },

  {
    path: "/examples",
    element: <><MainNav /><Examples /></>,
    children: [
      { path: "my-examples", element: <>this will contain my exmaple data</> },
      {
        path: "concepts/*",
        element: (
          <Suspense fallback={<Loader />}>
            <ConceptsRoute />
          </Suspense>
        ),
      },
      // {
      //   path: "concepts", 
      //   element: <ConceptsCompo />, 
      //   children: [
      //     { path: "jsx", element: <>jsx example</> },
      //     { path: "useeffect", element: <>use Effect data</> }
      //   ]
      // }
    ]
  },
  // { path: "my-examples", element: <>this will contain my exmaple data</> },
]);
export default router