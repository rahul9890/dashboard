import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/groupchat"
              >
                GroupChat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/manageusers"
              >
                ManageUsers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/managedocuments"
              >
                ManageDocument
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary mx-1" aria-current="page" to="/">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
