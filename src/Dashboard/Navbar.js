import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
   localStorage.removeItem("loggedInUser");
    navigate("/");
  };

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
          {/* check if we can use grid here to show column */}
          <ul className="navbar-nav w-100 d-flex">
            <li className="nav-item flex-grow-1  border border-dark border-2 bg-primary">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/groupchat"
              >
                GroupChat
              </Link>
            </li>
            <li className="nav-item flex-grow-1 border border-dark border-2 bg-primary">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/manageusers"
              >
                ManageUsers
              </Link>
            </li>
            <li className="nav-item flex-grow-1 border border-dark border-2 bg-primary">
              <Link
                className="btn btn-primary mx-1"
                aria-current="page"
                to="/managedocuments"
              >
                ManageDocument
              </Link>
            </li>

            <li className="nav-item flex-grow-1 border border-dark border-2 bg-primary">
              <button
                className="btn btn-primary mx-1"
                aria-current="page"
              onClick={()=>handleLogout()}
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
