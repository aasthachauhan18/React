import React from "react";



function Button() {
    const handleChange =  () =>  {
     alert("Hello Aastha!")
 }
  return (
    <>

      {/* <button className="btn btn-primary" onClick={()=>alert('Hello Aastha!')}>Click Me!</button> */}
      <button className="btn btn-primary" onClick={handleChange}>Click Me!</button>
      
    </>
  );
}

export default Button;
