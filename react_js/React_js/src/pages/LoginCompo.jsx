import React from 'react';

const LoginCompo = () => {
    const handleStoreData = () => {
        localStorage.setItem("isLoggedIn",true);
        alert("Data stored in localStorage!");
    };
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <h2>LocalStorage Example</h2>
                            </div>
                            <div className="card-body">
                                <button className='btn btn-primary' onClick={handleStoreData}>
                                    Login
                                </button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;