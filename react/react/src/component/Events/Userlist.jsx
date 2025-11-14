import React from "react";

function Userlist() {

    const Users = ["Aastha","Mahi","Bharvi","Nitu"]

    const greetUser = ()=>{
        alert(`Hello ${Users[i]}`)
    }
  return (
    <div>
      <button
          key={Users}
          className="btn btn-primary"
          onClick={() => greetUser(Users)}
          
        >
          Click to Greet {Users}
        </button>
    </div>
  )
}

export default Userlist
