import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/MyRouter.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider } from "react-router/dom";




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
