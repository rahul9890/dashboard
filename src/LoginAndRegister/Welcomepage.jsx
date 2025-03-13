import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Welcomepage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h2
        className="welcome-heading"
        style={{ color: "#122287", fontSize: "2rem", fontWeight: "bold" }}
      >
        Welcome to Users Module
      </h2>
      <div className="login-box">
        <p>
          <strong>Existing Users</strong>
        </p>
        <button onClick={handleLoginClick}>Login</button>
        <p>
          <strong>New Users</strong>
        </p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}
