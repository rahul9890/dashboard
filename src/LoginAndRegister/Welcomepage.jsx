import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

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
      <h2 className="welcome-heading">Welcome to Users Module</h2>
      <div className="login-box">
        <p style={{ marginTop: "10%" }}>
          <strong>Existing Users?</strong>
        </p>
        <button onClick={handleLoginClick} className="login-button">
          Login
        </button>
        <div style={{ marginTop: "25%" }}>
          <p style={{ marginBottom: "3%", marginTop: "10px" }}>
            <strong style={{ color: "#b700ff" }}>New Users?</strong>
          </p>
          <button onClick={handleRegisterClick} className="register-button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
