import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcomepage() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    }
    const handleRegisterClick = () => {
        navigate("/register");
    }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to Users Module</h2>
        <p>
          <strong>Existing Users</strong>
        </p>
        <button onClick={handleLoginClick}>Login</button>
        <p>
          <strong>New Users</strong>
        </p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </>
  );
}
