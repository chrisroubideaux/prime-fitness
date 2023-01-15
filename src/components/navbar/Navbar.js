import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm mx-auto fw-bold fixed-top ">
        <div className="container-fluid">
          <Link className="nav-link fs-4" to="/">
            Prime
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="social-icons fas fa-align-right"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="container-fluid">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link nav-item " to="/"></Link>
                </li>
                <li className="nav-item mt-1 m-2">
                  <div className="input-group">
                    <Link
                      to="/"
                      className="nav-link dropwdown-toggle fs-4"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                      <span className=" m-2">
                        <i className="social-icons fa-solid fa-angle-down mr-1"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu" style={{ width: '15rem' }}>
                      <li>
                        <Link className="dropdown-item fs-4" to="/Session">
                          Classes
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item fs-4" to="/Trainer">
                          Trainers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item fs-4" to="/Team">
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item fs-4" to="/Events">
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item fs-4" to="/Contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item mt-1">
                  <Link className="nav-link fs-4" to="/Membership">
                    Memberships
                  </Link>
                </li>
                <li className="nav-item mt-1 fs-4">
                  <Link className="nav-link" to="/Register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
