import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="./assests/Images/logo.png" alt="Logo" className="logo" />
            {/* <span class="brand-text ms-2">Tayra Beauty</span> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Homepage
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="product.html">
                      PRODUCT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SINGLE PRODUCT
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Page
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SINGLE POST
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      404
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="icon-btn">
              <i className="bi bi-search" />
            </button>
            <button className="cart-btn">
              $0.00
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
