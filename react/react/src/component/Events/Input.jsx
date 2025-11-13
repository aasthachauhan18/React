import React from "react";
import { useState } from "react";


function Input() {

    const [name,setName] = useState('');

   
  return (
    <div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<br></br>
<h2>Name = {name}</h2>
    </div>
  )
}

export default Input
