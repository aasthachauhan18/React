import React from "react";
import { useState } from "react";




function Display() {

    const [shownotification,setShownotification] = useState(false);
  return (
    <>
    <div className="text-center p-5 bg-dark">
        <button className="btn btn-success btn-secondary" onClick={() => setShownotification(!shownotification)}>Display Notification</button>
        {shownotification && 
        <p className="text-center text-capitalize text-danger p-4">Welcome to the Dashboard!</p>
        }
    </div>
    </>
  )
}

export default Display