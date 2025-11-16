import React from "react";


function Name() {
    const name = ["Aastha","Dev","Vrutika","Shivu"]
  return (
    <div>
        <ul>
            {name.map((names,index) =>(
                <li key={index}>{names}</li>
            ))}
        </ul>
    </div>
  )
}

export default Name