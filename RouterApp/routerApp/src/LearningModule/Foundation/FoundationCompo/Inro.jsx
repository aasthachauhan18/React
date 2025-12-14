import React from "react";
import { Link, Outlet } from "react-router";

function Inro() {
  return (
    <>
      <h2>Introduction</h2>
      <div className="tl-c">
        <ol>
          <li><Link className="text-center text-black text-decoration-none">What is React?</Link></li>
          <li><Link className="text-center text-black text-decoration-none"> Features & Advantages of React</Link></li>
          <li><Link className="text-center text-black text-decoration-none">SPA (Single Page Application) & Virtual DOM</Link></li>
          <li><Link className="text-center text-black text-decoration-none">Setting up React with Vite</Link></li>
          <li><Link className="text-center text-black text-decoration-none">Folder Structure Overview (Vite + React)</Link></li>
        </ol>
        <div lassName="-text-center"> 
        <Outlet/>

        </div>

      </div>
    </>
  );
}

export default Inro;
