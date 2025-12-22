import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
const isLoggedIn = localStorage.setItem("isLoggedIn",true)

if(!isLoggedIn){

    console.log("yes inside condition");
    // return <Navigate to="/login" replace></Navigate>
}
return children;

}

export default ProtectedRoute;