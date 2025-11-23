import React from "react";
import { NavLink, Outlet } from "react-router";

function Learning() {
  return (
    <>
      <h2>Leaning React</h2>
      <ul>
        <li>
          <NavLink className="text-black" to="foundation">
            React Foundation
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black" to="router">
            React Router
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black" to="hooks">
            React Hooks
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black" to="redux">
            React Redux
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black" to="firebase">
            React Firebase
          </NavLink>
        </li>
      </ul>
      <div className="text-center bg-success">
 <Outlet/>
      </div>
    </>
  );
}

export default Learning;
