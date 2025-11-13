import React from "react";
import { useState } from "react";



function Like() {

    const [like,setLike] = useState(false)
    const Click = ()=>{
        setLike(!like)
    }
  return (
    <div>
        <button onClick={Click} className="btn btn-btn-primary btn-danger">{like ? "Liked " : "Like "}</button>
    </div>
  )
}

export default Like