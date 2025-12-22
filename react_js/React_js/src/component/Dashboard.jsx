import React from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {

    const handleLogOut = () =>{
        localStorage.removeItem("isLoggedIn");
        window.location.to = "/login"
    }
  return (
   
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
        <span className="navbar-brand mb-0 h1">Simple Dashboard</span>
        <button
          className="btn btn-primary"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </nav>

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light min-vh-100 p-3">
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link active" to="#">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Settings</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <h3 className="mb-4">Dashboard Overview</h3>

          {/* Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Users</h5>
                  <p className="card-text fs-4">1200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Revenue</h5>
                  <p className="card-text fs-4">₹45,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <p className="card-text fs-4">320</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card">
            <div className="card-header">Recent Users</div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Aastha</td><td>aastha@gmail.com</td><td>Active</td></tr>
                  <tr><td>Rahul</td><td>rahul@gmail.com</td><td>Inactive</td></tr>
                  <tr><td>Pooja</td><td>pooja@gmail.com</td><td>Active</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
