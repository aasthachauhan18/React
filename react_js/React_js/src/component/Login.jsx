import React from "react";

const Login = () =>{
    const handleLogin = () =>{
        localStorage.getItem("isLoggedIn");
        window.location.href = "/dashboard";
    }
    return(
        <>
         <div className="container mt-5">
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <h2>Protected</h2>
                            </div>
                            <div className="card-body">
                                <button className='btn btn-primary' onClick={handleLogin}>
                                    Login
                                </button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;