import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Product from "../Pages/Product";
import Setting from "../Pages/Setting";
import Parent from "../Pages/Parent";
// import UseActionState from "../Pages/UseActionState";
import CustomHook from "../Pages/CustomHook";

function Main_route() {
  return (
    // <Routes>
    //   <Route path="/" element={<Dashboard />}>
    //     <Route path="product" element={<Product/>}/>
    //     <Route path="settings" element={<Setting/>}/>
    //   </Route>

    // </Routes>
    <Routes>
      {/* <Route path="/parent" element={<Parent/>}/>
      <Route path="/useaction" element={<UseActionState/>}/> */}
      <Route path="/customhook" element={<CustomHook/>}/>
    </Routes>
  );
}

export default Main_route;
