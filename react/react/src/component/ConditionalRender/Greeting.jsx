import React from "react";
import { useState } from "react";


function Greeting() {

    const [name,setName] = useState('');

  return (
    <div>
        {name? `Hello ${name}` : "Enter your name"}
        <button onClick={() => setName(name)}>Click</button>
    </div>
  )
}

export default Greeting;

















