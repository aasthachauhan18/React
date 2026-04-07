// import React, { useActionState } from 'react'

// function UseActionState() {
//     const [data,action,pending] = useActionState(submitBtn,undefined);

//     function submitBtn(pre,formdata) {
//         const name = formdata.get('name');
//         const email = formdata.get('email')
//         console.log("Hello",name,email);
        
//     }
//   return (
//     <>
//     <form action={action}>
//         <label htmlFor="username">UserName :</label>
//         <input type="text" name='name' placeholder='Enter your Name..' />
        
//         <label htmlFor="mail">Email :</label>
//         <input type="text" name='email' placeholder='Enter Email..' />

//         <button type="submit">Submit</button>
//     </form>
//     </>
//   )
// }

// export default UseActionState




// import React, { useActionState, useState } from "react";

// function UseActionState() {
//   const [data, action, pending] = useActionState(submitbtn, undefined);
//   async function submitbtn(pre, formdata) {
//     const name = formdata.get("name");
//     const password = formdata.get("password");
//     const email = formdata.get("email");
//     await new Promise((res) => setTimeout(res, 5000));
//     console.log("ergui", name, password, email);

//     if (name === "") {
//       return { error_name: "name is not defined", name, password, email };
//     } else if (email === "") {
//       return { error_email: "email is not defined", name, password, email };
//     } else if (password === "") {
//       return {
//         error_password: "password is not defined",
//         name,
//         password,
//         email,
//       };
//     } else {
//       return { message: "form is submitted", name, password, email };
//     }
//   }
//   console.log(data);

//   return (
//     <>
//       <form action={action}>
//         <label htmlFor="UseName">UseName: </label>
//         <input
//           type="text"
//           placeholder="Enter Your Name...."
//           name="name"
//           defaultValue={data?.name}
//         />
//         {data?.error_name && (
//           <span className="text-danger">{data.error_name}</span>
//         )}
//         <br />
//         <input
//           type="password"
//           placeholder="Enter Your pasword...."
//           name="password"
//           defaultValue={data?.password}
//         />
//         {data?.error_password && (
//           <span className="text-danger">{data.error_password}</span>
//         )}

//         <br />
//         <label htmlFor="email">Email :</label>
//         <input
//           type="email"
//           placeholder="Enter email"
//           name="email"
//           defaultValue={data?.email}
//         />
//         {data?.error_email && (
//           <span className="text-danger">{data.error_email}</span>
//         )}

//         <button type="submit" disabled={pending}>
//           submit
//         </button>
//         {data?.message && <span className="text-success">{data.message}</span>}
//       </form>
//     </>
//   );
// }

// export default UseActionState;