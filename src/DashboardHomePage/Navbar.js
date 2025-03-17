import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleGroupChatButton = (e) => {
    e.preventDefault();
    navigate("/groupchat");
  };

    const handleManageUsers = (e) => {
        e.preventDefault();
        navigate("/manageusers");
    };
  return (
    <nav
      className="navbar bg-dark border-bottom border-body fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link
            to="/groupchat"
            className="btn btn-outline-light me-2"
            onClick={handleGroupChatButton}
          >
            Group Chat
          </Link>
          <Link to="/manageusers" className="btn btn-outline-light me-2" onClick={handleManageUsers}>ManageUser</Link>
        </div>
      </div>
    </nav>
  );
}
