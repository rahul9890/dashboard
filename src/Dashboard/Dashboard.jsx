import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
   
    if (!isAuthenticated) {
      navigate("/");
    }
  });

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
