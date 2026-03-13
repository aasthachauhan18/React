import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Product from "../Pages/Product";
import Setting from "../Pages/Setting";

function Main_route() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="product" element={<Product/>}/>
        <Route path="settings" element={<Setting/>}/>
      </Route>
    </Routes>
  );
}

export default Main_route;
