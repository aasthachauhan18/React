import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import router from './myRouter/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />,
  </StrictMode>,
)
