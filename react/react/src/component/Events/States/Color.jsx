import React from "react";
import { useState } from "react";



function Color() {


    const [toggle,setToggle] = useState('light')

    const Click = () =>{
        setToggle('dark')
    }
  return (
    <div>
        <button className={`btn btn-${toggle}`} onClick={Click}>{toggle? "DarkMode":"LightMode"}</button>
    </div>
  )
}

export default Color