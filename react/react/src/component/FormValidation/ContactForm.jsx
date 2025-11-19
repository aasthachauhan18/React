import React from "react";
import { useState } from "react";


function ContactForm() {

    const [contactForm,setContactForm] = useState({fullname : "" , mobilenumber: "" ,message:""});

    const handleChange = (e) =>{
        setContactForm({ ...contactForm, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!contactForm.fullname) {
            alert('Name must be required');
        }

        if (contactForm.mobilenumber!=10) {
            alert('Mobile Number must be 10 digits')
        }
        if (contactForm.message.length <20) {
            alert('Message must be minimum 20 Chracters')
        }

        alert('Form submitted successfully');
    }
  return (
   <>
   <div className="text-center p-5 bg-secondary">
     <h2>ContactForm</h2>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullname" value={contactForm.fullname} onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1" name="mobilenumber" value={contactForm.mobilenumber} onChange={handleChange}/>
  </div><div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Message</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="message" value={contactForm.message} onChange={handleChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
         

   </div>
   </>
  )
}

export default ContactForm