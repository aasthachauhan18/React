import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Guide from './GuideSteps.jsx'
import MainRoutes from './MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);
// export default function App() {
//   return <RouterProvider router={router} />;
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     testing
//     <p>something</p>
//     <Guide/>
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render( <RouterProvider router={MainRoutes} /> )