import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './MainRouter/MainRouter.jsx';
import { RouterProvider } from "react-router/dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
