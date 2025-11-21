import React from "react";
import { useNavigate } from "react-router";

function Service() {
  const navigate = useNavigate();

  const goToHome = () =>{
    navigate("/home");
  }
  return (
    <div>
      <h1>Hello I'm Service</h1>
      <button className="btn btn-secondary" onClick={goToHome}>Go To Home</button>
    </div>
  );
}

export default Service;
