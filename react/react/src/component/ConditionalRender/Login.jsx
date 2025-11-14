import React from "react";
import { useState } from "react";



function Login() {

    const [login,setlogin] = useState(false);

    
  return (
    
     <div className="text-center p-5">
        {login? (
            <>
            <h1>
                Welcome User!
            </h1>
            <button onClick={() =>setlogin(false)}>Logout</button>
            </>

        ):(
            <>
            <h1>Please Log in!</h1>
            <button onClick={() => setlogin(true)}>Login</button>
            </>
        )}
     </div>
  );
}


export default Login