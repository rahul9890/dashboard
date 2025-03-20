import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const inputEmail = location.state?.inputEmail || "Guest";

  
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "7%" }}>
        <h2>Login Successful</h2>
        <p>
          <strong>Welcome!</strong> {inputEmail} 
        </p>
      </div>
    </>
  );
}
