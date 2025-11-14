import React from "react";
import { useState } from "react";
import FormData from "../Events/FormData";
import Color from "../Events/States/Color";


function Component() {
    const [isLogin,setIsLogin] = useState(false);

  return (
    <div>
        {isLogin? <Color/> : <FormData/>}
        <button onClick={() => setIsLogin(!isLogin)}>Switch to the Toggle</button>
    </div>
  )
}

export default Component