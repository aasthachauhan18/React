import React from "react";
import { useState } from "react";


function LoginForm() {
    const [form,setForm] = useState({email: "",password:""});

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!form.email.includes("@")) {
            alert("Invalid Email");
            return;
        }
        if (form.password<6) {
            alert("Password must be 6 character long");
        }

        alert("Form Submitted Successfully");
    }

  return (
    <>
    <h2>LoginForm</h2>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={form.email} onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={form.password} onChange={handleChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default LoginForm